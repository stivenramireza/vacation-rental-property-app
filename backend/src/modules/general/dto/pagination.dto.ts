import { Type } from 'class-transformer';
import { IsOptional, Max, Min } from 'class-validator';
import { DefaultPagination } from '../interfaces/pagination.interface';

export class PaginationDto {
  @IsOptional()
  @Min(DefaultPagination.PAGE)
  @Type(() => Number)
  page?: number;

  @IsOptional()
  @Min(1)
  @Max(DefaultPagination.LIMIT)
  @Type(() => Number)
  limit?: number;
}
