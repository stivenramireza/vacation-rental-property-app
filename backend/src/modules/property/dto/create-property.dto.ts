import { IsDateString, IsNumber, IsString, MinLength } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @MinLength(1)
  location: string;

  @IsNumber()
  pricePerNight: number;

  @IsDateString()
  availabilityStart: string;

  @IsDateString()
  availabilityEnd: string;
}
