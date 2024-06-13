import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class UpdateImageDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    photo_url: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    accomodationId: string
}
