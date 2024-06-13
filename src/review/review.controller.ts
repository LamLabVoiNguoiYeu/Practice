import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateReviewDto, UpdateReviewDto } from './dto';

@ApiTags('Review')
@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @ApiOperation({summary: 'Create new review!'})
  @ApiCreatedResponse({description: 'Create new review successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  @ApiOperation({summary: 'Get all reviews!'})
  @ApiCreatedResponse({description: 'Get all reviews successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  @ApiOperation({summary: 'Get review by id!'})
  @ApiCreatedResponse({description: 'Get review by id successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Get(':id') 
  findOne(@Param('id') id: string) {
    return this.reviewService.findOne(id);
  }

  @ApiOperation({summary: 'Update review by id!'})
  @ApiCreatedResponse({description: 'Update review by id successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Patch(':id') 
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewService.update(id, updateReviewDto);
  }

  @ApiOperation({summary: 'Delete review by id!'})
  @ApiCreatedResponse({description: 'Delete review by idsuccessfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Delete(':id')  
  remove(@Param('id') id: string) {
    return this.reviewService.remove(id);
  }
}