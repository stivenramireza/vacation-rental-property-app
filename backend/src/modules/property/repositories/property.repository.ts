import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Property } from '../entities/property.entity';
import { CreatePropertyDto } from '../dto/create-property.dto';
import { PaginationService } from '../../general/services/pagination.service';
import { PaginationDto } from '../../general/dto/pagination.dto';
import { Pagination } from '../../general/interfaces/pagination.interface';

@Injectable()
export class PropertyRepository {
  constructor(
    @InjectRepository(Property)
    private readonly repository: Repository<Property>,
    private readonly paginationService: PaginationService
  ) {}

  async save(createPropertyDto: CreatePropertyDto): Promise<Property> {
    const newProperty = this.repository.create(createPropertyDto);
    return await this.repository.save(newProperty);
  }

  async find(paginationDto: PaginationDto): Promise<Pagination<Property>> {
    const { page, limit } = paginationDto;

    const query = this.repository.createQueryBuilder('p');

    return await this.paginationService.getPage({
      query,
      entityAlias: 'p',
      orderingField: 'createdAt',
      page,
      limit
    });
  }
}
