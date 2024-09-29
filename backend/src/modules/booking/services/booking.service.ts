import { Injectable } from '@nestjs/common';

import { CreateBookingDto } from '../dto/create-booking.dto';

@Injectable()
export class BookingService {
  create(createBookingDto: CreateBookingDto) {
    return 'This action adds a new booking';
  }

  findAll() {
    return `This action returns all booking`;
  }
}
