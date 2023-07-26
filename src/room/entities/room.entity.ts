import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Subject } from 'src/subject/entities/subject.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Chat } from 'src/chat/entities/chat.entity';

@Entity()
export class Room {
  @ApiProperty({ minimum: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  // @ApiProperty()
  // @Column({
  //   type: 'datetime',
  // })
  // created_at: string;

  // @ApiProperty()
  // @Column({
  //   type: 'datetime',
  // })
  // updated_at: string;

  @OneToMany((type) => Chat, (chat) => chat.room)
  chats: Chat[];
}
