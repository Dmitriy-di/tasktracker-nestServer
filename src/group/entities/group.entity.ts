import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Subject } from 'src/subject/entities/subject.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany((type) => Subject, (subject) => subject.group)
  subjects: Subject[];
}
