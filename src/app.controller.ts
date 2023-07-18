import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateSubjectDto } from './subject/dto/create-subject.dto';
import { AuthService } from './auth/auth.service';
import { SubjectService } from './subject/subject.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private readonly subjectService: SubjectService,
  ) {}

  @Post('auth/register')
  register(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectService.register(createSubjectDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
