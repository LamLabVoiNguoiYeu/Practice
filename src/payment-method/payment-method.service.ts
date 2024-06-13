import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment-method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment-method.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaymentMethodService {
  constructor(
    private prismaService : PrismaService
  ){}
  async create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.prismaService.paymentMethod.create({data: createPaymentMethodDto});
  }

  async findAll() {
    return this.prismaService.paymentMethod.findMany();
  }

  async findOne(id: string) {
    return this.prismaService.paymentMethod.findFirstOrThrow({where: {paymentMethod_id: id}});
  }

  async update(id: string, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.prismaService.paymentMethod.update({where: {paymentMethod_id: id}, data: updatePaymentMethodDto});
  }

  remove(id: string) {
    return this.prismaService.paymentMethod.delete({where: {paymentMethod_id: id}});
  }
}
