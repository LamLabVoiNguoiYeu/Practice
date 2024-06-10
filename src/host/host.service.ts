import { Injectable } from '@nestjs/common';
import { CreateHostDto } from './dto/create-host.dto';
import { UpdateHostDto } from './dto/update-host.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HostService {
  constructor(
    private prisma: PrismaService
  ){}
  async create(createHostDto: CreateHostDto) {
    return await this.prisma.host.create({data: createHostDto})
  }

  async findAll() {
    return await this.prisma.host.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.host.findFirstOrThrow()
  }

  async update(id: string, updateHostDto: UpdateHostDto) {
    return await this.prisma.host.update({where: {id}, data: updateHostDto})
  }

  async remove(id: string) {
    return await this.prisma.host.delete({where: {id}})
  }
}
