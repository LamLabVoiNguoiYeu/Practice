import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({summary: 'Create new booking!'})
  @ApiCreatedResponse({description: 'Create new booking successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @ApiOperation({summary: 'Get all bookings!'})
  @ApiCreatedResponse({description: 'Get all bookings successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @ApiOperation({summary: 'Get booking by id!'})
  @ApiCreatedResponse({description: 'Get booking by id successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Get('/:{id}') 
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(id);
  }

  @ApiOperation({summary: 'Update booking by id!'})
  @ApiCreatedResponse({description: 'Update booking by id successfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Patch('/:{id}') 
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(id, updateBookingDto);
  }

  @ApiOperation({summary: 'Delete booking by id!'})
  @ApiCreatedResponse({description: 'Delete booking by idsuccessfully'})
  @ApiInternalServerErrorResponse({description: 'Internal Server Error!' })
  @ApiBadRequestResponse({description: 'Bad request!'})
  @Delete('/:{id}')  
  remove(@Param('id') id: string) {
    return this.bookingService.remove(id);
  }
}
