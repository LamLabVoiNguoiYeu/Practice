import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class UpdatePaymentMethodDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    method: string
}
