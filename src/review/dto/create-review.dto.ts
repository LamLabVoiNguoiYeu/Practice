import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateReviewDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    title: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    content: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    accommodationId: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    userId: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    rating: number
}
