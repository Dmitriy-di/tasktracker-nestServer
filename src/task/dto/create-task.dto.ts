import { taskStatusEnum } from '../entities/task.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({
    description: 'Название задачи',
  })
  name: string;

  @ApiProperty({
    description: 'Описание задачи',
  })
  description: string;

  @ApiProperty({
    description: 'Статус задачи',
  })
  status: taskStatusEnum;

  @ApiProperty({
    description: 'Идентификатор модуля, которому принадлежит задача',
  })
  moduleeId: number;

  @ApiProperty({
    description: 'Идентификатор пользователя, которому принадлежит задача',
  })
  subjectId: number;
}
