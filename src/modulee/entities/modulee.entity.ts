import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Task } from 'src/task/entities/task.entity';
import { Subject } from 'src/subject/entities/subject.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Modulee {
  @ApiProperty({ minimum: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column({
    type: 'datetime',
  })
  dateTimeStart: string;

  @ApiProperty()
  @Column({
    type: 'datetime',
  })
  dateTimeEnd: string;

  @OneToMany((type) => Task, (task) => task.modulee)
  tasks: Task[];

  @ManyToOne((type) => Subject, (subject) => subject.modulees, { eager: true })
  subject: Subject;
}
