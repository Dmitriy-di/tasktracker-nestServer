import { Module } from '@nestjs/common';
import { ModuleeService } from './modulee.service';
import { SubjectService } from 'src/subject/subject.service';
import { ModuleeController } from './modulee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modulee } from './entities/modulee.entity';
import { Subject } from 'src/subject/entities/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Modulee, Subject])],
  controllers: [ModuleeController],
  providers: [ModuleeService, SubjectService],
})
export class ModuleeModule {}
