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
  ) {}

  @SubscribeMessage('message')
  async handleEvent(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    console.log(111111111, data);
    const user = await this.subjectService.findOne(data.email);
    console.log(user);

    // const dataMessage: CreateChatDto;
    // this.subjectService.create(data)
    return data;
  }
}
