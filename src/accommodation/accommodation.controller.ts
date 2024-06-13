import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AccommodationService } from './accommodation.service';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { Roles } from 'src/auth/decorators';
import { AccessTokenGuard, RolesGuard } from 'src/auth/guards';
import { CreateAccommodationDto, UpdateAccommodationDto } from './dto';

@ApiTags('Accommodation')
@Controller('accommodation')
export class AccommodationController {
  constructor(private readonly accommodationService: AccommodationService) {}

  @ApiOperation({summary: 'Create new accommodation!'})
  @ApiCreatedResponse({description: 'Create new accommodation successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized: Login first!' })
  @ApiBearerAuth()
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(Role.ADMIN)
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
  @Get(':id') 
  findOne(@Param('id') id: string) {
    return this.accommodationService.findOne(id);
  }

  @ApiOperation({summary: 'Update accommodation by id!'})
  @ApiCreatedResponse({description: 'Update accommodation by id successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized: Login first!' })
  @ApiBearerAuth()
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Patch(':id') 
  update(@Param('id') id: string, @Body() updateAccommodationDto: UpdateAccommodationDto) {
    return this.accommodationService.update(id, updateAccommodationDto);
  }

  @ApiOperation({summary: 'Delete accommodation by id!'})
  @ApiCreatedResponse({description: 'Delete accommodation by idsuccessfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @ApiUnauthorizedResponse({ description: 'Unauthorized: Login first!' })
  @ApiBearerAuth()
  @UseGuards(AccessTokenGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Delete(':id')  
  remove(@Param('id') id: string) {
    return this.accommodationService.remove(id);
  }
}