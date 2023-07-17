import { Injectable } from '@nestjs/common';
import { CreateModuleeDto } from './dto/create-modulee.dto';
import { UpdateModuleeDto } from './dto/update-modulee.dto';

@Injectable()
export class ModuleeService {
  create(createModuleeDto: CreateModuleeDto) {
    return 'This action adds a new modulee';
  }

  findAll() {
    return `This action returns all modulee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} modulee`;
  }

  update(id: number, updateModuleeDto: UpdateModuleeDto) {
    return `This action updates a #${id} modulee`;
  }

  remove(id: number) {
    return `This action removes a #${id} modulee`;
  }
}
