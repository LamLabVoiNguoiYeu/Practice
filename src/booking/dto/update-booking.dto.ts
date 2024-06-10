import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { BookingStatus, Prisma } from '@prisma/client';

export class UpdateBookingDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    totalCost: number

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    checkInDate: string

    @ApiProperty()
    @IsNotEmpty()
    @IsDateString()
    checkOutDate: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    accommodation: Prisma.AccommodationCreateNestedOneWithoutBookingsInput

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    user: Prisma.UserCreateNestedOneWithoutBookingsInput

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    host: Prisma.HostCreateNestedOneWithoutBookingInput

    @ApiProperty({enum: BookingStatus})
    status: BookingStatus
}
