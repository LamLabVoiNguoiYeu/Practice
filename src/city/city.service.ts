import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCityDto, UpdateCityDto } from './dto';

@Injectable()
export class CityService {
  constructor(
    private prismaService: PrismaService
  ){}
  async create(createCityDto: CreateCityDto) {
    return await this.prismaService.city.create({data: createCityDto})
  }

  findAll() {
    return this.prismaService.city.findMany();
  }

  findOne(id: string) {
    return this.prismaService.city.findFirstOrThrow({where: {city_id: id}});
  }

  update(id: string, updateCityDto: UpdateCityDto) {
    return this.prismaService.city.update({where: {city_id: id}, data: updateCityDto});
  }

  remove(id: string) {
    return this.prismaService.city.delete({where: {city_id: id}});
  }
}
