import { ApiProperty } from "@nestjs/swagger/dist"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateImageDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    photo_url: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    accomodationId: string
}
