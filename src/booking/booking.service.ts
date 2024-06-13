import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookingDto, UpdateBookingDto } from './dto';

@Injectable()
export class BookingService {
  constructor(
    private prismaService: PrismaService
  ){}
  async create(createBookingDto: CreateBookingDto) {
    const{totalCost, checkInDate, checkOutDate, accommodationId,userId,status} = createBookingDto
    return this.prismaService.booking.create({
      data: {
        user:{
          connect:{user_id: userId}
        },
        accommodation:{
          connect:{accommodation_id: accommodationId}
        },
        totalCost,
        checkInDate,
        checkOutDate,
        status
      }
    })
  }

  async findAll() {
    return await this.prismaService.booking.findMany()
  }

  async findOne(id: string) {
    return await this.prismaService.booking.findFirstOrThrow({where: {booking_id: id}})
  }

  async update(id: string, updateBookingDto: UpdateBookingDto) {
    const{totalCost, checkInDate, checkOutDate, accommodationId,userId,status} = updateBookingDto
    return this.prismaService.booking.update({
      where: {booking_id: id},
      data: {
        user: {
          connect: { user_id: userId }
        },
        accommodation: {
          connect: { accommodation_id: accommodationId }
        },
        totalCost,
        checkInDate,
        checkOutDate,
        status
      },
    })
  }

  async remove(id: string) {
    return this.prismaService.booking.delete({where: {booking_id: id}})
  }
}
