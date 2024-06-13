import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImageService {
  constructor(
    private prismaService: PrismaService
  ){}
  async create(createImageDto: CreateImageDto) {
    const{photo_url, accomodationId} = createImageDto
    return await this.prismaService.image.create({
      data:{
        accommodation: {
          connect: {accommodation_id: accomodationId}
        },
        photo_url
      }
    });
  }

  async findAll() {
    return await this.prismaService.image.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.image.findFirstOrThrow({where: {image_id: id}});
  }

  async update(id: string, updateImageDto: UpdateImageDto) {
    const{photo_url, accomodationId} = updateImageDto
    return await this.prismaService.image.update({
      where: {image_id: id},
      data:{
        accommodation: {
          connect: {accommodation_id: accomodationId}
        },
        photo_url
      }
    });
  }

  async remove(id: string) {
    return await this.prismaService.image.delete({where: {image_id: id}})
  }
}
