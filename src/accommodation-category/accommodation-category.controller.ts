import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AccommodationCategoryService } from './accommodation-category.service';
import { ApiBadRequestResponse, ApiBearerAuth, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AccessTokenGuard, RolesGuard } from 'src/auth/guards';
import { Role } from '@prisma/client';
import { Roles } from 'src/auth/decorators';
import { CreateAccommodationCategoryDto, UpdateAccommodationCategoryDto } from './dto';

@ApiTags('Accommodation-category')
@Controller('accommodation-category')
@ApiUnauthorizedResponse({ description: 'Unauthorized: Login first!' })
@ApiBearerAuth()
@UseGuards(AccessTokenGuard, RolesGuard)
@Roles(Role.ADMIN)

export class AccommodationCategoryController {
  constructor(private readonly accommodationCategoryService: AccommodationCategoryService) {}

  @ApiOperation({summary: 'Create new category!'})
  @ApiCreatedResponse({description: 'Create new category successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Post()
  create(@Body() createAccommodationCategoryDto: CreateAccommodationCategoryDto) {
    return this.accommodationCategoryService.create(createAccommodationCategoryDto);
  }

  @ApiOperation({summary: 'Get all categories!'})
  @ApiCreatedResponse({description: 'Get all categories successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Get()
  findAll() {
    return this.accommodationCategoryService.findAll();
  }

  @ApiOperation({summary: 'Get category by id!'})
  @ApiCreatedResponse({description: 'Get category by id successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accommodationCategoryService.findOne(id);
  }

  @ApiOperation({summary: 'Update category by id!'})
  @ApiCreatedResponse({description: 'Update category by id successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccommodationCategoryDto: UpdateAccommodationCategoryDto) {
    return this.accommodationCategoryService.update(id, updateAccommodationCategoryDto);
  }

  @ApiOperation({summary: 'Delete category by id!'})
  @ApiCreatedResponse({description: 'Delete category by idsuccessfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accommodationCategoryService.remove(id);
  }
}
