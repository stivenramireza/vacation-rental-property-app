import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Booking } from './entities/booking.entity';
import { BookingController } from './controllers/booking.controller';
import { BookingService } from './services/booking.service';
import { BookingRepository } from './repositories/booking.repository';
import { GeneralModule } from '../general/general.module';
import { PropertyModule } from '../property/property.module';

@Module({
  controllers: [BookingController],
  providers: [BookingService, BookingRepository],
  imports: [TypeOrmModule.forFeature([Booking]), GeneralModule, PropertyModule],
  exports: []
})
export class BookingModule {}
