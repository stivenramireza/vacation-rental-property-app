import { ApiProperty } from '@nestjs/swagger';

import { IsDateString, IsString, MinLength, Validate } from 'class-validator';
import { DateTime } from 'luxon';

export class CreateBookingDto {
  @ApiProperty({
    description: 'The customer name',
    example: 'Stiven Ramírez Arango'
  })
  @IsString()
  @MinLength(1)
  customerName: string;

  @ApiProperty({
    description: 'Checkin date',
    example: '2024-10-05T15:00:00Z'
  })
  @IsDateString()
  checkIn: string;

  @ApiProperty({
    description: 'Checkout date',
    example: '2024-10-10T12:00:00Z'
  })
  @IsDateString()
  checkOut: string;
}
