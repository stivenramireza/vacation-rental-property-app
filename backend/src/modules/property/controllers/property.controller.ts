import { Controller, Get, Post, Body, Param, Delete, Query, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { CreatePropertyDto } from '../dto/create-property.dto';
import { UpdatePropertyDto } from '../dto/update-property.dto';
import { PropertyService } from '../services/property.service';
import { PaginationDto } from '../../general/dto/pagination.dto';
import { Property } from '../entities/property.entity';
import { Pagination } from '../../general/interfaces/pagination.interface';

@ApiTags('Properties')
@Controller('properties')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @ApiOperation({ summary: 'Create a new property' })
  @Post()
  async create(@Body() createPropertyDto: CreatePropertyDto): Promise<Property> {
    return this.propertyService.create(createPropertyDto);
  }

  @ApiOperation({ summary: 'List all properties' })
  @Get()
  findAll(@Query() paginationDto: PaginationDto): Promise<Pagination<Property>> {
    return this.propertyService.findAll(paginationDto);
  }

  @ApiOperation({ summary: 'Update property details' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto): Promise<Property> {
    return this.propertyService.update(id, updatePropertyDto);
  }

  @ApiOperation({ summary: 'Delete a property' })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Property> {
    return this.propertyService.remove(id);
  }
}
