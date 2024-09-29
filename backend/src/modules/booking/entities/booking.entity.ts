import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { DateTime } from 'luxon';

import { Property } from '../../property/entities/property.entity';

@Entity({ name: 'booking' })
export class Booking {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', name: 'property_id' })
  propertyId: string;

  @Column({ type: 'text' })
  customerName: string;

  @Column({ type: 'timestamp', name: 'check_in' })
  checkIn: Date;

  @Column({ type: 'timestamp', name: 'check_out' })
  checkOut: Date;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => Property, (property) => property.bookings)
  @JoinColumn({ name: 'property_id' })
  property: Property;

  get totalPrice(): number {
    const [checkInDate, checkOutDate] = [
      DateTime.fromJSDate(this.checkIn),
      DateTime.fromJSDate(this.checkOut)
    ];

    const days = Math.floor(checkOutDate.diff(checkInDate).days);
    const total = days * this.property.pricePerNight;

    return Number(total.toFixed(2));
  }

  private toJSON() {
    return {
      ...this,
      totalPrice: this.totalPrice
    };
  }
}
