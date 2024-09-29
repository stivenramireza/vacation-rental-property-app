import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';

import { DefaultPagination } from '../interfaces/pagination.interface';

export class PaginationDto {
  @ApiProperty({
    default: DefaultPagination.PAGE,
    description: 'Page number',
    example: 1
  })
  @IsOptional()
  @Min(DefaultPagination.PAGE)
  @Type(() => Number)
  page?: number;

  @ApiProperty({
    default: DefaultPagination.LIMIT,
    description: 'Number of records',
    example: 15
  })
  @IsOptional()
  @Min(1)
  @Max(DefaultPagination.LIMIT)
  @Type(() => Number)
  limit?: number;
}
