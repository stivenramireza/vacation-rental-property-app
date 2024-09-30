import { Test, TestingModule } from '@nestjs/testing';

import { BookingController } from '@/modules/booking/controllers/booking.controller';
import { BookingService } from '@/modules/booking/services/booking.service';

describe('BookingController', () => {
  let controller: BookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingController],
      providers: [BookingService]
    }).compile();

    controller = module.get<BookingController>(BookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
