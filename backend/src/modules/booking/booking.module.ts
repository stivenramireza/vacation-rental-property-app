import { Module } from '@nestjs/common';

import { BookingController } from './controllers/booking.controller';
import { BookingService } from './services/booking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';

@Module({
  controllers: [BookingController],
  providers: [BookingService],
  imports: [TypeOrmModule.forFeature([Booking])],
  exports: []
})
export class BookingModule {}
