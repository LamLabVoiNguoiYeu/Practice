import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentDto, UpdatePaymentDto } from './dto';

@Injectable()
export class PaymentService {
  constructor(
    private prismaService: PrismaService
  ){}
  async create(createPaymentDto: CreatePaymentDto) {
    const{amount, userId, bookingId, paymentMethodId} = createPaymentDto
    return await this.prismaService.payment.create({
      data: {
        amount,
        user: {
          connect: {user_id: userId}
        },
        booking: {
          connect: {booking_id: bookingId}
        },
        paymentMethod: {
          connect: {paymentMethod_id: paymentMethodId}
        }
      }
    });
  }

  async findAll() {
    return this.prismaService.payment.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.payment.findFirstOrThrow({where: {payment_id: id}});
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto) {
    const{amount, userId, bookingId, paymentMethodId} = updatePaymentDto
    return await this.prismaService.payment.update({
      where: {payment_id: id},
      data: {
        amount,
        user: {
          connect: {user_id: userId}
        },
        booking: {
          connect: {booking_id: bookingId}
        },
        paymentMethod: {
          connect: {paymentMethod_id: paymentMethodId}
        }
      }
    });
  }

  async remove(id: string) {
    return this.prismaService.payment.delete({where: {payment_id: id}});
  }
}
