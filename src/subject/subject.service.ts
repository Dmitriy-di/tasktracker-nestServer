import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private repository: Repository<Subject>,
  ) {}

  create(data: CreateSubjectDto) {
    return this.repository.save(data);
  }

  findAll() {
    return this.repository.find({ relations: ['tasks', 'modulees'] });
  }

  findOne(id: number) {
    return this.repository.findOne({
      relations: ['tasks', 'modulees'],
      where: {
        id,
      },
    });
  }

  update(id: number, data: UpdateSubjectDto) {
    return this.repository.save({ ...data, id });
  }

  async remove(id: number) {
    return this.repository.delete(id);
  }
}
