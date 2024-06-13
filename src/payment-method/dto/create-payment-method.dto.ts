import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePaymentMethodDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    method: string
}
