import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { SubjectService } from 'src/subject/subject.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Subject } from 'src/subject/entities/subject.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Subject])],
  controllers: [TaskController],
  providers: [TaskService, SubjectService],
})
export class TaskModule {}
