import { Injectable } from '@nestjs/common';
import { CreateAccommodationDto } from './dto/create-accommodation.dto';
import { UpdateAccommodationDto } from './dto/update-accommodation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AccommodationService {
  constructor(
    private prisma : PrismaService
  ){}
  create(createAccommodationDto: CreateAccommodationDto) {
    return this.prisma.accommodation.create({data: createAccommodationDto})
  }

  async findAll() {
    return await this.prisma.accommodation.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.accommodation.findFirstOrThrow;
  }

  async update(id: string, updateAccommodationDto: UpdateAccommodationDto) {
    return await this.prisma.accommodation.update({where: {id}, data: updateAccommodationDto});
  }

  async remove(id: string) {
    return await this.prisma.accommodation.delete({where: {id}});
  }
}
