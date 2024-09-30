import { ApiProperty } from '@nestjs/swagger';

import { IsDateString, IsNumber, IsString, MinLength } from 'class-validator';

export class CreatePropertyDto {
  @ApiProperty({ description: 'The property name', example: 'Cozy Cabin' })
  @IsString()
  @MinLength(1)
  name: string;

  @ApiProperty({
    description: 'The property location',
    example: 'Miami, Florida, United States'
  })
  @IsString()
  @MinLength(1)
  location: string;

  @ApiProperty({
    description: 'Price per night in USD',
    example: 150
  })
  @IsNumber()
  pricePerNight: number;

  @ApiProperty({
    description: 'Availability start date',
    example: '2024-10-01T00:00:00Z'
  })
  @IsDateString()
  availabilityStart: string;

  @ApiProperty({
    description: 'Availability end date',
    example: '2024-10-31T00:00:00Z'
  })
  @IsDateString()
  availabilityEnd: string;
}
