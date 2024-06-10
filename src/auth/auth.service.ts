import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SigninUserDto, SignupUserDto } from './dto';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';
import { JwtPayload, Tokens } from './types';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ){}
  async signupLocal(signupUserDto: SignupUserDto): Promise<Tokens> {
    const { email, password, role } = signupUserDto;
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await this.prisma.user.create({
      data:{
        email: email,
        password: hashedPassword,
        role: role,
      }
    })
    const tokens = await this.getTokens(newUser.id, newUser.email,  newUser.role)
    await this.updateRtHash(newUser.id, tokens.refresh_token)
    return tokens
  }
  async signinLocal(signinUserDto: SigninUserDto): Promise<Tokens> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: signinUserDto.email,
      }
    })

    if(!user) throw new ForbiddenException('Access denied: Invalid email!')
       
    const validatePassword = await bcrypt.compare(signinUserDto.password, user.password)
    if(!validatePassword) throw new ForbiddenException('Access denied: Invalid password')
    
    const tokens = await this.getTokens(user.id, user.email,  user.role)
    await this.updateRtHash(user.id, tokens.refresh_token)
    return tokens
  }

  async logout(user_id: string): Promise<boolean> {
    const user = await this.prisma.user.update({
      where: {
        id: user_id,
        refresh_toke:{
          not: null
        }
      },
      data: {
        refresh_toke: null
      }
    })
    return true
  }

  async updateRtHash(userId: string, rt: string): Promise<void>{
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data:{
        refresh_toke: await bcrypt.hash(rt, 10)
      }
    })
  }


  async refreshTokens(user_id: string, rt: string):Promise<Tokens>{
    const user = await this.prisma.user.findUnique({
      where:{
        id: user_id
      }
    })
    if(!user) throw new ForbiddenException('Access denied')
    
    const validateToken = await bcrypt.compare(rt, user.refresh_toke)
    if(!validateToken) throw new ForbiddenException('Acess denied:')
    
    const tokens = await this.getTokens(user.id, user.email,  user.role)
    await this.updateRtHash(user.id, tokens.refresh_token)
    return tokens
  }
  async getTokens(id: string, email: string, role: Role){
    const jwtPayload: JwtPayload = {
      id: id,
      email: email,
      role: role,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.AT_JWT_SECRET,
        expiresIn:  process.env.AT_JWT_EXPIRES_IN,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: process.env.RT_JWT_SECRET,
        expiresIn: process.env.RT_JWT_EXPIRES_IN,
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
