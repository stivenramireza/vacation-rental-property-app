import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PropertyController } from './controllers/property.controller';
import { PropertyService } from './services/property.service';
import { PropertyRepository } from './repositories/property.repository';
import { Property } from './entities/property.entity';
import { GeneralModule } from '../general/general.module';

@Module({
  controllers: [PropertyController],
  providers: [PropertyService, PropertyRepository],
  imports: [TypeOrmModule.forFeature([Property]), GeneralModule],
  exports: [PropertyService]
})
export class PropertyModule {}
