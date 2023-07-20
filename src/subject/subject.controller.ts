import { Controller, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AuthService } from '../auth/auth.service';

@Controller('subject')
export class SubjectController {
  constructor(
    private readonly subjectService: SubjectService, // private authService: AuthService,
  ) {}

  // @Post()
  // create(@Body() createSubjectDto: CreateSubjectDto) {
  //   return this.subjectService.create(createSubjectDto);
  // }

  // @Post('/register')
  // register(@Body() createSubjectDto: CreateSubjectDto) {
  //   return this.subjectService.register(createSubjectDto);
  // }

  // @UseGuards(AuthGuard('local'))
  // @Post('/login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }
  // login(@Body() createSubjectDto: CreateSubjectDto) {
  //   return this.subjectService.login(createSubjectDto);
  // }

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

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
  //   return this.subjectService.update(+id, updateSubjectDto);
  // }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectService.remove(+id);
  }
}
