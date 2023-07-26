import { ApiProperty } from '@nestjs/swagger';

export class CreateChatDto {
  @ApiProperty({
    description: 'Текст сообщения',
  })
  message: string;

  @ApiProperty({
    description: 'Идентификатор субъекта',
  })
  subjectId: number;

  @ApiProperty({
    description: 'Идентификатор комнаты',
  })
  roomId: number;
}
