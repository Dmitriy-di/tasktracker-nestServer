import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupModule } from './group/group.module';
import { ModuleeModule } from './modulee/modulee.module';
import { SubjectModule } from './subject/subject.module';
import { TaskModule } from './task/task.module';
import { Group } from './group/entities/group.entity';
import { Modulee } from './modulee/entities/modulee.entity';
import { Subject } from './subject/entities/subject.entity';
import { Task } from './task/entities/task.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Group, Modulee, Subject, Task],
      synchronize: true,
    }),
    GroupModule,
    ModuleeModule,
    SubjectModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}