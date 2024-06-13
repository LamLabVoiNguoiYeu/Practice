import { ApiProperty } from "@nestjs/swagger";
import { BookingStatus, Prisma } from "@prisma/client";
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookingDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    totalCost: string

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
    accommodationId: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    userId: string

    @ApiProperty({enum: BookingStatus})
    status: BookingStatus
}