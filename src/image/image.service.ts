import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageService {
  constructor(
    private prisma: PrismaService
  ){}
  create(createImageDto: CreateImageDto) {
    return this.prisma.image.create({data: createImageDto})
  }

  findOne(id: string) {
    return this.prisma.image.findFirstOrThrow()
  }

  update(id: string, updateImageDto: UpdateImageDto) {
    return this.prisma.image.update({where:{id}, data:updateImageDto})
  }

  remove(id: string) {
    return this.prisma.image.delete({where: {id}})
  }
}
