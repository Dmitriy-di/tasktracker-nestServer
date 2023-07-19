import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './entities/subject.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private repository: Repository<Subject>,
  ) {}

  // create(data: CreateSubjectDto) {
  //   return this.repository.save(data);
  // }

  async register(data: CreateSubjectDto) {
    const saltOrRounds = 10;

    data.password = await bcrypt.hash(data.password, saltOrRounds);
    return this.repository.save(data);
  }

  async login(data: CreateSubjectDto) {
    const user = await this.repository.findOneBy({ email: data.email });
    if (!user) {
      return false;
    }
    return await bcrypt.compare(data.password, user.password);
  }

  findAll() {
    return this.repository.find({ relations: ['tasks', 'modulees'] });
  }

  findOne2(id: number) {
    return this.repository.findOne({
      relations: ['tasks', 'modulees'],
      where: {
        id,
      },
    });
  }

  findOne(email: string) {
    return this.repository.findOne({
      relations: ['tasks', 'modulees'],
      where: {
        email,
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
