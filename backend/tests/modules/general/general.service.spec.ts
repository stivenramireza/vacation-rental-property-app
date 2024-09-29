import { Test, TestingModule } from '@nestjs/testing';

import { GeneralService } from '@/modules/general/services/general.service';

describe('GeneralService', () => {
  let service: GeneralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralService]
    }).compile();

    service = module.get<GeneralService>(GeneralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
