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

  @SubscribeMessage('connection')
  async handleEvent(
    @MessageBody() email: any,
    @ConnectedSocket() client: Socket,
  ) {
    const user = await this.subjectService.findOne(email);
    let rooms = [];
    console.log(user.isModerator);

    if (user.isModerator) {
      rooms = await this.roomService.findAll();
    } else {
      rooms = [await this.roomService.findOne(`room-${user.id}`)];
    }

    // const room = await this.roomService.findOne(`room-${user.id}`);

    return rooms;
  }

  @SubscribeMessage('message')
  async handleEvent2(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    const user = await this.subjectService.findOne(data.email);
    const room = await this.roomService.findOneById(data.roomId);

    if (data.previousRoomId != '') {
      client.leave(`room-${data.previousRoomId}`);
    }
    client.join(`room-${data.roomId}`);
    console.log('leave', `room-${data.previousRoomId}`);
    console.log('join', `room-${data.roomId}`);

    const dataMessage: any = {
      message: data.msg,
      subject: user,
      room: room.id,
    };

    this.chatService.create(dataMessage);

    client.emit('message', dataMessage);
    client.broadcast.to(`room-${data.roomId}`).emit('message', dataMessage);
    console.log('broadcast', `room-${data.roomId}`);

    return dataMessage;
  }

  @SubscribeMessage('roomId')
  async handleEvent3(
    @MessageBody() roomId: number,
    @ConnectedSocket() client: Socket,
  ) {
    const roomMessages = await this.chatService.findByRoomId(roomId);
    client.join(`room-${roomId}`);

    return roomMessages;
  }
}
