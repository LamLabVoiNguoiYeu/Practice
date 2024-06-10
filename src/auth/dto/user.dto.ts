import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsEmail, IsEnum, IsNotEmpty } from "class-validator";

export class UserDto{

    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    id: string

    @ApiProperty({ example: 'example@gmail.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsEnum(Role)
    role?: Role

}