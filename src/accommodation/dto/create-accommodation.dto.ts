import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import internal from "stream";

export class CreateAccommodationDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    price: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    location: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    rating: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    hostId: string

}
