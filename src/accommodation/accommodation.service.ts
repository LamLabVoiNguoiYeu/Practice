import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAccommodationDto, UpdateAccommodationDto } from './dto';

@Injectable()
export class AccommodationService {
  constructor(
    private prisma : PrismaService
  ){}
  create(createAccommodationDto: CreateAccommodationDto) {
    const{description, price, location, rating, userId, cityId, accommodationCategoryId} = createAccommodationDto
    return this.prisma.accommodation.create({
      data: {
        user: {
          connect: {user_id: userId}
        },
        city: {
          connect: {city_id: cityId}
        },
        accommodationCategory: {
          connect: {accommodationCategory_id: accommodationCategoryId}
        },
        description,
        price,
        location,
        rating
      }
    })
  }

  async findAll() {
    return await this.prisma.accommodation.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.accommodation.findUnique({where: {accommodation_id: id}})}

  async update(id: string, updateAccommodationDto: UpdateAccommodationDto) {
    const{description, price, location, rating, userId, cityId, accommodationCategoryId} = updateAccommodationDto
    return this.prisma.accommodation.update({
      where: {accommodation_id: id},
      data: {
        user: {
          connect: {user_id: userId}
        },
        city: {
          connect: {city_id: cityId}
        },
        accommodationCategory: {
          connect: {accommodationCategory_id: accommodationCategoryId}
        },
        description,
        price,
        location,
        rating
      }
    })
  }

  async remove(id: string) {
    return await this.prisma.accommodation.delete({where: {accommodation_id: id}});
  }
}