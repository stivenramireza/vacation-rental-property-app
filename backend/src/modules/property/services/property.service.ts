import { ConflictException, Injectable } from '@nestjs/common';

import { CreatePropertyDto } from '../dto/create-property.dto';
import { UpdatePropertyDto } from '../dto/update-property.dto';
import { PropertyRepository } from '../repositories/property.repository';
import { Pagination } from '../../general/interfaces/pagination.interface';
import { Property } from '../entities/property.entity';
import { PaginationDto } from '../../general/dto/pagination.dto';

@Injectable()
export class PropertyService {
  constructor(private readonly propertyRepository: PropertyRepository) {}

  async create(createPropertyDto: CreatePropertyDto) {
    try {
      return await this.propertyRepository.save(createPropertyDto);
    } catch (error) {
      throw new ConflictException('The property could not be created');
    }
  }

  async findAll(paginationDto: PaginationDto): Promise<Pagination<Property>> {
    return await this.propertyRepository.find(paginationDto);
  }

  async update(id: string, updatePropertyDto: UpdatePropertyDto) {
    return `This action updates a #${id} property`;
  }

  async remove(id: string) {
    return `This action removes a #${id} property`;
  }
}
