import { PartialType } from '@nestjs/mapped-types';
import { CreateImageDto } from './create-image.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateImageDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    description: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string
}
