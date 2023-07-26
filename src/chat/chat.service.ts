import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat)
    private repository: Repository<Chat>,
  ) {}

  create(data: CreateChatDto) {
    return this.repository.save(data);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({
      relations: [],
      where: {
        id,
      },
    });
  }

  update(id: number, data: UpdateChatDto) {
    return this.repository.save({ ...data, id });
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
