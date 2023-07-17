import { Test, TestingModule } from '@nestjs/testing';
import { ModuleeController } from './modulee.controller';
import { ModuleeService } from './modulee.service';

describe('ModuleeController', () => {
  let controller: ModuleeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleeController],
      providers: [ModuleeService],
    }).compile();

    controller = module.get<ModuleeController>(ModuleeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
