import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { BookingService } from '../services/booking.service';
import { CreateBookingDto } from '../dto/create-booking.dto';
import { PaginationDto } from '../../general/dto/pagination.dto';

@ApiTags('Bookings')
@Controller('properties/:id')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: 'Create a new booking for a property' })
  @Post('book')
  create(
    @Param('id') propertyId: string,
    @Body() createBookingDto: CreateBookingDto
  ) {
    return this.bookingService.create(propertyId, createBookingDto);
  }

  @ApiOperation({ summary: 'List all bookings for a property' })
  @Get('bookings')
  findAll(
    @Param('id') propertyId: string,
    @Query() paginationDto: PaginationDto
  ) {
    return this.bookingService.findAll(propertyId, paginationDto);
  }
}
