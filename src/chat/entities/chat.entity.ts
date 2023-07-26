import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Subject } from 'src/subject/entities/subject.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Room } from 'src/room/entities/room.entity';

@Entity()
export class Chat {
  @ApiProperty({ minimum: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  //   @ApiProperty()
  //   @Column({
  //     type: 'datetime',
  //   })
  //   created_at: string;

  //   @ApiProperty()
  //   @Column({
  //     type: 'datetime',
  //   })
  //   updated_at: string;

  @ManyToOne((type) => Subject, (subject) => subject.chats, { eager: true })
  subject: Subject;

  @ManyToOne((type) => Room, (room) => room.chats, { eager: true })
  room: Room;
}
