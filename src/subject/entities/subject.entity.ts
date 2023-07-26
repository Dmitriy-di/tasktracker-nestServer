import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Group } from 'src/group/entities/group.entity';
import { Task } from 'src/task/entities/task.entity';
import { Modulee } from 'src/modulee/entities/modulee.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Chat } from 'src/chat/entities/chat.entity';

@Entity()
export class Subject {
  @ApiProperty({ minimum: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  first_name: string;

  @ApiProperty()
  @Column()
  middle_name: string;

  @ApiProperty()
  @Column()
  last_name: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty({
    default: false,
  })
  @Column({ default: false })
  isModerator: boolean;

  @ManyToOne((type) => Group, (group) => group.subjects, { eager: true })
  group: Group;

  @OneToMany((type) => Task, (task) => task.subject)
  tasks: Task[];

  @OneToMany((type) => Modulee, (modulee) => modulee.subject)
  modulees: Modulee[];

  @OneToMany((type) => Chat, (chat) => chat.subject)
  chats: Chat[];
}
