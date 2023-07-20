import { ApiProperty } from '@nestjs/swagger';

export class CreateSubjectDto {
  @ApiProperty({
    description: 'Имя',
  })
  first_name: string;

  @ApiProperty({
    description: 'Отчество',
  })
  middle_name: string;

  @ApiProperty({
    description: 'Фамилия',
  })
  last_name: string;

  @ApiProperty({
    description: 'Почта email',
  })
  email: string;

  @ApiProperty({
    description: 'Пароль',
  })
  password: string;

  @ApiProperty({
    description: 'Является ли модератором',
  })
  isModerator: boolean;

  @ApiProperty({
    description: 'Идентификатор группы, которой принадлежит пользователь',
  })
  groupId: number;
}
