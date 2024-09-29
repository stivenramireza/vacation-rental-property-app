import { Module } from '@nestjs/common';

import { GeneralController } from './controllers/general.controller';
import { GeneralService } from './services/general.service';
import { PaginationService } from './services/pagination.service';

@Module({
  controllers: [GeneralController],
  providers: [GeneralService, PaginationService],
  imports: [],
  exports: [PaginationService]
})
export class GeneralModule {}
