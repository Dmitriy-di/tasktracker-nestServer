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
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './socket/event.module';
import { ChatModule } from './chat/chat.module';
import { Chat } from './chat/entities/chat.entity';
import { RoomModule } from './room/room.module';
import { Room } from './room/entities/room.entity';

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
      entities: [Group, Modulee, Subject, Task, Chat, Room],
      synchronize: false,
    }),
    GroupModule,
    ModuleeModule,
    SubjectModule,
    TaskModule,
    AuthModule,
    EventsModule,
    ChatModule,
    RoomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
