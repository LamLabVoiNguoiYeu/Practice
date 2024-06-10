import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateReviewDto{
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
    @IsNumber()
    rating: number
}
