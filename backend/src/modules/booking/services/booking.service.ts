import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';

import { DateTime } from 'luxon';

import { CreateBookingDto } from '../dto/create-booking.dto';
import { BookingRepository } from '../repositories/booking.repository';
import { PaginationDto } from '../../general/dto/pagination.dto';
import { Pagination } from '../../general/interfaces/pagination.interface';
import { Booking } from '../entities/booking.entity';
import { PropertyService } from '../../property/services/property.service';
import { Property } from '../../property/entities/property.entity';

@Injectable()
export class BookingService {
  private readonly logger = new Logger(BookingService.name);

  constructor(
    private readonly bookingRepository: BookingRepository,
    private readonly propertyService: PropertyService
  ) {}

  async create(propertyId: string, createBookingDto: CreateBookingDto): Promise<Booking> {
    const property = await this.propertyService.findById(propertyId);

    const { checkIn, checkOut } = createBookingDto;
    await this.validateBookingRules(property, checkIn, checkOut);

    let createdBooking: Booking;
    try {
      const newBooking = { ...createBookingDto, propertyId };
      createdBooking = await this.bookingRepository.save(newBooking);
    } catch (error) {
      this.logger.error(error?.message || error);
      throw new ConflictException('The property could not be created');
    }

    return await this.findById(createdBooking.id);
  }

  async findAll(propertyId: string, paginationDto: PaginationDto): Promise<Pagination<Booking>> {
    return await this.bookingRepository.find(propertyId, paginationDto);
  }

  async findById(bookingId: string): Promise<Booking> {
    const booking = await this.bookingRepository.findById(bookingId);
    if (!booking) throw new NotFoundException('Booking not found');

    return booking;
  }

  async validateBookingRules(property: Property, checkIn: string, checkOut: string) {
    // Validate booking dates
    const [checkInDate, checkOutDate] = [DateTime.fromISO(checkIn), DateTime.fromISO(checkOut)];
    if (checkInDate > checkOutDate) {
      throw new ConflictException('Checkout date must be greater than checkin date');
    }

    // Validate booking availability
    const [availabilityStartDate, availabilityEndDate] = [
      DateTime.fromJSDate(property.availabilityStart),
      DateTime.fromJSDate(property.availabilityEnd)
    ];
    const isAvailableBooking =
      checkInDate >= availabilityStartDate && checkOutDate <= availabilityEndDate;
    if (!isAvailableBooking) {
      throw new ConflictException('Property is not available for bookings between those dates');
    }

    // Validate booking existence
    await this.validateBookingExistence(property, checkInDate.toJSDate(), checkOutDate.toJSDate());
  }

  async validateBookingExistence(property: Property, checkIn: Date, checkOut: Date): Promise<void> {
    const booking = await this.bookingRepository.findOne({
      propertyId: property.id,
      checkIn,
      checkOut
    });
    if (booking) {
      throw new ConflictException('A booking already exists for that property and dates');
    }
  }
}
