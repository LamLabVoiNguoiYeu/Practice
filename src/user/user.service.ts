import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    private prisma : PrismaService
  ){}
  // async create(createUserDto: CreateUserDto) {
  //   return await this.prisma.user.create({data: createUserDto})
  // }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.user.findFirstOrThrow({where: {user_id: id}})
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({where: {user_id: id}, data: updateUserDto})
  }

  async remove(user_id: string) {
    return await this.prisma.user.delete({where: {user_id}})
  }
}