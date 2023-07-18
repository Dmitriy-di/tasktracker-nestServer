import { taskStatusEnum } from '../entities/task.entity';

export class CreateTaskDto {
  name: string;
  description: string;
  status: taskStatusEnum;
  moduleeId: number;
  subjectId: number;
}
