import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Modulee } from 'src/modulee/entities/modulee.entity';
import { Subject } from 'src/subject/entities/subject.entity';

export enum taskStatusEnum {
  assigned = 'assigned',
  accomplished = 'accomplished',
  completed = 'completed',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: taskStatusEnum,
    default: taskStatusEnum.assigned,
  })
  status: taskStatusEnum;

  @ManyToOne((type) => Modulee, (module) => module.tasks, { eager: true })
  modulee: Modulee;

  @ManyToOne((type) => Subject, (subject) => subject.tasks, { eager: true })
  subject: Subject;
}
