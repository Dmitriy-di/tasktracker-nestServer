import { Test, TestingModule } from '@nestjs/testing';
import { ModuleeService } from './modulee.service';

describe('ModuleeService', () => {
  let service: ModuleeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleeService],
    }).compile();

    service = module.get<ModuleeService>(ModuleeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
