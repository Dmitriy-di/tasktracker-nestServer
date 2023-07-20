import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthService } from '../auth/auth.service';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Subject } from './entities/subject.entity';

@ApiTags('Subject')
@ApiBearerAuth()
@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @ApiResponse({
    status: 201,
    description: 'Получены все субъекты',
    type: Subject,
  })
  @ApiResponse({ status: 401, description: 'Нет авторизации' })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.subjectService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectService.findOne2(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectService.remove(+id);
  }
}
