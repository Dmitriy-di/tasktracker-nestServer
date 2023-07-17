import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private repository: Repository<Group>,
  ) {}

  create(data: CreateGroupDto) {
    return this.repository.save(data);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  update(id: number, data: UpdateGroupDto) {
    return this.repository.save({ ...data, id });
  }

  async remove(id: number) {
    return this.repository.delete(id);
  }
}
