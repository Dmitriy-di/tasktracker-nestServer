import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Task } from 'src/task/entities/task.entity';
import { Subject } from 'src/subject/entities/subject.entity';

@Entity()
export class Modulee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'datetime',
  })
  dateTimeStart: string;

  @Column({
    type: 'datetime',
  })
  dateTimeEnd: string;

  @OneToMany((type) => Task, (task) => task.modulee)
  tasks: Task[];

  @ManyToOne((type) => Subject, (subject) => subject.modulees, { eager: true })
  subject: Subject;
}
