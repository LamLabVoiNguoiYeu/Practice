import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookingService {
  constructor(
    private prisma : PrismaService
  ){}
  create(createBookingDto: CreateBookingDto) {
    return this.prisma.booking.create({data: createBookingDto})
  }

  findAll() {
    return this.prisma.booking.findMany();
  }

  findOne(id: string) {
    return this.prisma.booking.findFirstOrThrow();
  }

  update(id: string, updateBookingDto: UpdateBookingDto) {
    return this.prisma.booking.update({where: {id}, data: updateBookingDto})
  }

  remove(id: string) {
    return this.prisma.booking.delete({where: {id}})
  }
}
