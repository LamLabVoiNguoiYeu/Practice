import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePaymentDto } from './create-payment.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdatePaymentDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    amount: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    userId: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    bookingId: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    paymentMethodId: string
}
