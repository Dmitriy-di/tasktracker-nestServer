import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupDto {
  @ApiProperty({
    description: 'Название группы',
  })
  name: string;

  @ApiProperty({
    description: 'Описание группы',
  })
  description: string;
}
