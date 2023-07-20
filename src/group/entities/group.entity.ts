import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Subject } from 'src/subject/entities/subject.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Group {
  @ApiProperty({ minimum: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  description: string;

  @OneToMany((type) => Subject, (subject) => subject.group)
  subjects: Subject[];
}
