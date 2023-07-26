import { Module } from '@nestjs/common';
import { EventsGateway } from './event.gateway';
import { SubjectService } from 'src/subject/subject.service';
import { ChatService } from 'src/chat/chat.service';
import { RoomService } from 'src/room/room.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectModule } from 'src/subject/subject.module';
import { ChatModule } from 'src/chat/chat.module';
import { Subject } from 'src/subject/entities/subject.entity';
import { Chat } from 'src/chat/entities/chat.entity';
import { Room } from 'src/room/entities/room.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chat, Subject, Room])],
  providers: [EventsGateway, SubjectService, RoomService, ChatService],
})
export class EventsModule {}
