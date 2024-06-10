import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccommodationService } from './accommodation.service';
import { CreateAccommodationDto } from './dto/create-accommodation.dto';
import { UpdateAccommodationDto } from './dto/update-accommodation.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Accommodation')
@Controller('accommodation')
export class AccommodationController {
  constructor(private readonly accommodationService: AccommodationService) {}

  @ApiOperation({summary: 'Create new accommodation!'})
  @ApiCreatedResponse({description: 'Create new accommodation successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Post()
  create(@Body() createAccommodationDto: CreateAccommodationDto) {
    return this.accommodationService.create(createAccommodationDto);
  }

  @ApiOperation({summary: 'Get all accommodations!'})
  @ApiCreatedResponse({description: 'Get all accommodations successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Get()
  findAll() {
    return this.accommodationService.findAll();
  }

  @ApiOperation({summary: 'Get accommodation by id!'})
  @ApiCreatedResponse({description: 'Get accommodation by id successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Get('/:{id}') 
  findOne(@Param('id') id: string) {
    return this.accommodationService.findOne(id);
  }

  @ApiOperation({summary: 'Update accommodation by id!'})
  @ApiCreatedResponse({description: 'Update accommodation by id successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Patch('/:{id}') 
  update(@Param('id') id: string, @Body() updateAccommodationDto: UpdateAccommodationDto) {
    return this.accommodationService.update(id, updateAccommodationDto);
  }

  @ApiOperation({summary: 'Delete accommodation by id!'})
  @ApiCreatedResponse({description: 'Delete accommodation by idsuccessfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Delete('/:{id}')  
  remove(@Param('id') id: string) {
    return this.accommodationService.remove(id);
  }
}
