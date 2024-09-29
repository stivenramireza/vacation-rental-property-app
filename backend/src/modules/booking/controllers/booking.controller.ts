import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BookingService } from '../services/booking.service';
import { CreateBookingDto } from '../dto/create-booking.dto';

@ApiTags('Bookings')
@Controller('properties/:id')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('book')
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @Get('bookings')
  findAll() {
    return this.bookingService.findAll();
  }
}
