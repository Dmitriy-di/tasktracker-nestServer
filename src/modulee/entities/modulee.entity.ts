import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from 'src/task/entities/task.entity';

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
}
