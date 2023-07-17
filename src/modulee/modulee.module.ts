import { Module } from '@nestjs/common';
import { ModuleeService } from './modulee.service';
import { ModuleeController } from './modulee.controller';

@Module({
  controllers: [ModuleeController],
  providers: [ModuleeService]
})
export class ModuleeModule {}
