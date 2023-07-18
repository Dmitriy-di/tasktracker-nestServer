import { Module } from '@nestjs/common';
import { ModuleeService } from './modulee.service';
import { ModuleeController } from './modulee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modulee } from './entities/modulee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Modulee])],
  controllers: [ModuleeController],
  providers: [ModuleeService],
})
export class ModuleeModule {}
