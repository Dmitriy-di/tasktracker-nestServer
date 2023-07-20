import { ApiProperty } from '@nestjs/swagger';

export class CreateModuleeDto {
  @ApiProperty({
    description: 'Название модуля',
  })
  name: string;

  @ApiProperty({
    description: 'Описание модуля',
  })
  description: string;

  @ApiProperty({
    description: 'Время начала модуля',
  })
  dateTimeStart: string;

  @ApiProperty({
    description: 'Время окончания модуля',
  })
  dateTimeEnd: string;

  @ApiProperty({
    description: 'Идентификатор субъекта',
  })
  subjectId: number;
}
