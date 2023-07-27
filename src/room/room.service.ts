import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private repository: Repository<Room>,
  ) {}

  create(data: CreateRoomDto) {
    return this.repository.save(data);
  }

  findAll() {
    return this.repository.find({});
  }

  findOne(name: string) {
    return this.repository.findOne({
      relations: [],
      where: {
        name,
      },
    });
  }

  findOneById(id: number) {
    return this.repository.findOne({
      relations: [],
      where: {
        id,
      },
    });
  }

  update(id: number, data: UpdateRoomDto) {
    return this.repository.save({ ...data, id });
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
