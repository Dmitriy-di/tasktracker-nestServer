import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
