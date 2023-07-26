import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { ChatService } from 'src/chat/chat.service';
import { CreateChatDto } from 'src/chat/dto/create-chat.dto';
import { SubjectService } from 'src/subject/subject.service';
import { RoomService } from 'src/room/room.service';

@WebSocketGateway({
  path: '',
  serveClient: false,
  cors: {
    origin: `*`,
  },
})
export class EventsGateway {
  constructor(
    private readonly chatService: ChatService,
    private readonly subjectService: SubjectService,
    private readonly roomService: RoomService,
  ) {}

  @SubscribeMessage('message')
  async handleEvent(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    const user = await this.subjectService.findOne(data.email);
    const room = await this.roomService.findOne(`room-${user.id}`);

    const dataMessage: CreateChatDto = {
      message: data.msg,
      subject: user.id,
      room: room.id,
    };

    console.log(dataMessage);

    this.chatService.create(dataMessage);
    return data;
  }
}
