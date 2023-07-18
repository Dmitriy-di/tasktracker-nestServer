import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Group } from 'src/group/entities/group.entity';
import { Task } from 'src/task/entities/task.entity';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  middle_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isModerator: boolean;

  @ManyToOne((type) => Group, (group) => group.subjects, { eager: true })
  group: Group;

  @OneToMany((type) => Task, (task) => task.subject)
  tasks: Task[];
}
