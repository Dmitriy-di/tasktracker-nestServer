import { Injectable } from '@nestjs/common';
import { CreateModuleeDto } from './dto/create-modulee.dto';
import { UpdateModuleeDto } from './dto/update-modulee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Modulee } from './entities/modulee.entity';

@Injectable()
export class ModuleeService {
  constructor(
    @InjectRepository(Modulee)
    private repository: Repository<Modulee>,
  ) {}

  create(data: CreateModuleeDto) {
    return this.repository.save(data);
  }

  findAll() {
    return this.repository.find({ relations: ['tasks'] });
  }

  findOne(id: number) {
    return this.repository.findOne({
      relations: ['tasks'],
      where: {
        id,
      },
    });
  }

  update(id: number, data: UpdateModuleeDto) {
    return this.repository.save({ ...data, id });
  }

  async remove(id: number) {
    return this.repository.delete(id);
  }
}
