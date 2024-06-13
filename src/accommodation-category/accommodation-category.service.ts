import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccommodationCategoryDto, UpdateAccommodationCategoryDto } from './dto';

@Injectable()
export class AccommodationCategoryService {
  constructor(
    private prismaService: PrismaService
  ){}
  async create(createAccommodationCategoryDto: CreateAccommodationCategoryDto) {
    return await this.prismaService.accommodationCategory.create({data: createAccommodationCategoryDto});
  }

  async findAll() {
    return await this.prismaService.accommodationCategory.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.accommodationCategory.findFirstOrThrow({where: {accommodationCategory_id: id}});
  }

  async update(id: string, updateAccommodationCategoryDto: UpdateAccommodationCategoryDto) {
    return await this.prismaService.accommodationCategory.update({where: {accommodationCategory_id: id}, data:updateAccommodationCategoryDto});
  }

  async remove(id: string) {
    return await this.prismaService.accommodationCategory.delete({where: {accommodationCategory_id: id}});
  }
}
