import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsString()
    address: string

    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsString()
    @MinLength(6)
    password: string
    
}
