import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Booking } from '../../booking/entities/booking.entity';
import { PropertyStatus } from '../interfaces/property.interface';

@Entity({ name: 'property' })
export class Property {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  location: string;

  @Column({ type: 'float', name: 'price_per_night' })
  pricePerNight: number;

  @Column({ type: 'timestamp', name: 'availability_start' })
  availabilityStart: Date;

  @Column({ type: 'timestamp', name: 'availability_end' })
  availabilityEnd: Date;

  @Column({
    type: 'enum',
    enum: PropertyStatus,
    default: PropertyStatus.ACTIVE
  })
  status: PropertyStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @OneToMany(() => Booking, (booking) => booking.property)
  bookings: Booking[];
}
