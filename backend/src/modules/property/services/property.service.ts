import { ConflictException, Injectable, Logger, NotFoundException } from '@nestjs/common';

import { CreatePropertyDto } from '../dto/create-property.dto';
import { UpdatePropertyDto } from '../dto/update-property.dto';
import { PropertyRepository } from '../repositories/property.repository';
import { Pagination } from '../../general/interfaces/pagination.interface';
import { Property } from '../entities/property.entity';
import { PaginationDto } from '../../general/dto/pagination.dto';

@Injectable()
export class PropertyService {
  private readonly logger = new Logger(PropertyService.name);

  constructor(private readonly propertyRepository: PropertyRepository) {}

  async create(createPropertyDto: CreatePropertyDto): Promise<Property> {
    const { name, location } = createPropertyDto;
    await this.validatePropertyExistence(name, location);

    try {
      return await this.propertyRepository.save(createPropertyDto);
    } catch (error) {
      this.logger.error(error?.message || error);
      throw new ConflictException('The property could not be created');
    }
  }

  async findAll(paginationDto: PaginationDto): Promise<Pagination<Property>> {
    return await this.propertyRepository.find(paginationDto);
  }

  async findById(propertyId: string): Promise<Property> {
    const property = await this.propertyRepository.findById(propertyId);
    if (!property) throw new NotFoundException('Property not found');

    return property;
  }

  async update(propertyId: string, updatePropertyDto: UpdatePropertyDto): Promise<Property> {
    const { name, location } = updatePropertyDto;

    if (name && location) {
      await this.validatePropertyExistence(name, location);
    }

    try {
      await this.propertyRepository.update(propertyId, updatePropertyDto);
    } catch (error) {
      this.logger.error(error?.message || error);
      throw new ConflictException('The property could not be updated');
    }

    return await this.findById(propertyId);
  }

  async remove(propertyId: string) {
    const property = await this.findById(propertyId);

    try {
      await this.propertyRepository.delete(propertyId);
    } catch (error) {
      this.logger.error(error?.message || error);
      throw new ConflictException('The property could not be deleted');
    }

    return property;
  }

  async validatePropertyExistence(name: string, location: string): Promise<void> {
    const property = await this.propertyRepository.findOne({ name, location });
    if (property) throw new ConflictException('A property already exists with those features');
  }
}
