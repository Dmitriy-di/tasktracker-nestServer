import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
