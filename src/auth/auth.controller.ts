import { Controller, Get, Post, Body, Patch, Param, Delete, Req, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninUserDto, SignupUserDto } from './dto';
import { Tokens } from './types';
import { ApiTags } from '@nestjs/swagger';
import { GetUserId } from './decorators/get-user-id.decorator';
import { GetUser } from './decorators/get-user.decorator';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('local/signup')
  signupLocal(@Body() signupUserDto: SignupUserDto): Promise<Tokens>{
    return this.authService.signupLocal(signupUserDto);
  }

  @Post('local/signin')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() signinUserDto: SigninUserDto): Promise<Tokens> {
    return this.authService.signinLocal(signinUserDto)
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetUserId() user_id: string):Promise<boolean> {
    return this.authService.logout(user_id)
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetUser('refreshToken') refreshToken:string,
    @GetUserId() user_id:string ) {
    return this.authService.refreshTokens(user_id, refreshToken)
  }
}
