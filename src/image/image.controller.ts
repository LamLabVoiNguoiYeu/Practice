import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Image')
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}
  
  @ApiOperation({summary: 'Create new image!'})
  @ApiCreatedResponse({description: 'Create new image successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imageService.create(createImageDto);
  }


  @ApiOperation({summary: 'Get image by id!'})
  @ApiCreatedResponse({description: 'Get image by id successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Get('/:{id}') 
  findOne(@Param('id') id: string) {
    return this.imageService.findOne(id);
  }

  @ApiOperation({summary: 'Update image by id!'})
  @ApiCreatedResponse({description: 'Update image by id successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Patch('/:{id}') 
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(id, updateImageDto);
  }

  @ApiOperation({summary: 'Delete image by id!'})
  @ApiCreatedResponse({description: 'Delete image by idsuccessfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  remove(@Param('id') id: string) {
    return this.imageService.remove(id);
  }
}
