import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Property } from '../entities/property.entity';
import { CreatePropertyDto } from '../dto/create-property.dto';
import { PaginationService } from '../../general/services/pagination.service';
import { PaginationDto } from '../../general/dto/pagination.dto';
import { Pagination } from '../../general/interfaces/pagination.interface';
import {
  PropertyFindParams,
  PropertyStatus
} from '../interfaces/property.interface';
import { UpdatePropertyDto } from '../dto/update-property.dto';

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

    const query = this.repository
      .createQueryBuilder('p')
      .where('p.status = :status', { status: PropertyStatus.ACTIVE });

    return await this.paginationService.getPage({
      query,
      entityAlias: 'p',
      orderingField: 'createdAt',
      page,
      limit
    });
  }

  async findById(propertyId: string): Promise<Property> {
    return await this.repository.findOne({
      where: { id: propertyId, status: PropertyStatus.ACTIVE }
    });
  }

  async findOne(params: PropertyFindParams): Promise<Property> {
    const { name, location } = params;

    return await this.repository.findOne({
      where: {
        name,
        location,
        status: PropertyStatus.ACTIVE
      }
    });
  }

  async update(
    propertyId: string,
    updatePropertyDto: UpdatePropertyDto
  ): Promise<void> {
    await this.repository.update(propertyId, updatePropertyDto);
  }

  async delete(propertyId: string): Promise<void> {
    await this.repository.update(propertyId, {
      status: PropertyStatus.DELETED
    });
  }
}
