import { ApiProperty} from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCityDto{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    city_name: string
}
