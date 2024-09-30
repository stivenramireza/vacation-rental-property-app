import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Booking } from '../entities/booking.entity';
import { PaginationService } from '../../general/services/pagination.service';
import { CreateBookingDto } from '../dto/create-booking.dto';
import { PaginationDto } from '../../general/dto/pagination.dto';
import { Pagination } from '../../general/interfaces/pagination.interface';
import { BookingFindParams } from '../interfaces/booking.interface';

@Injectable()
export class BookingRepository {
  constructor(
    @InjectRepository(Booking)
    private readonly repository: Repository<Booking>,
    private readonly paginationService: PaginationService
  ) {}

  async save(createBookingDto: CreateBookingDto): Promise<Booking> {
    const newBooking = this.repository.create(createBookingDto);
    return await this.repository.save(newBooking);
  }

  async find(propertyId: string, paginationDto: PaginationDto): Promise<Pagination<Booking>> {
    const { page, limit } = paginationDto;

    const query = this.repository
      .createQueryBuilder('b')
      .innerJoinAndSelect('b.property', 'p')
      .where('b.property_id = :propertyId', { propertyId });

    return await this.paginationService.getPage({
      query,
      entityAlias: 'b',
      orderingField: 'createdAt',
      page,
      limit
    });
  }

  async findById(bookingId: string): Promise<Booking> {
    return await this.repository.findOne({
      where: { id: bookingId },
      relations: { property: true }
    });
  }

  async findOne(params: BookingFindParams): Promise<Booking> {
    const { propertyId, checkIn, checkOut } = params;

    return await this.repository.findOne({
      where: {
        propertyId,
        checkIn,
        checkOut
      },
      relations: { property: true }
    });
  }
}
