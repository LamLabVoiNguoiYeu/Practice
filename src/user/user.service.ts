import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(
    private prisma : PrismaService
  ){}
  async create(createUserDto: CreateUserDto) {
    return await this.prisma.user.create({data: createUserDto})
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findFirstOrThrow()
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({where: {id}, data: updateUserDto})
  }

  async remove(id: string) {
    return await this.prisma.user.delete({where: {id}})
  }
}