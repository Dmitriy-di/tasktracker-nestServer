import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ModuleeService } from './modulee.service';
import { CreateModuleeDto } from './dto/create-modulee.dto';
import { UpdateModuleeDto } from './dto/update-modulee.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SubjectService } from 'src/subject/subject.service';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Modulee } from './entities/modulee.entity';

@ApiTags('Modulee')
@ApiBearerAuth()
@Controller('modulee')
export class ModuleeController {
  constructor(
    private readonly moduleeService: ModuleeService,
    private readonly subjectService: SubjectService,
  ) {}

  @ApiResponse({ status: 201, description: 'Модуль создан', type: Modulee })
  @ApiResponse({ status: 401, description: 'Нет авторизации' })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createModuleeDto: CreateModuleeDto) {
    return this.moduleeService.create(createModuleeDto);
  }

  @ApiResponse({
    status: 201,
    description: 'Получены все модули',
    type: Modulee,
  })
  @ApiResponse({ status: 401, description: 'Нет авторизации' })
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Request() req) {
    let modulees = [];
    const email = req.user.userEmail;
    const user = await this.subjectService.findOne(email);
    console.log(user);

    if (user.isModerator) {
      modulees = await this.moduleeService.findAll();
    } else {
      modulees = user.modulees;
    }

    return modulees;
  }

  @ApiResponse({ status: 201, description: 'Модуль получен', type: Modulee })
  @ApiResponse({ status: 401, description: 'Нет авторизации' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moduleeService.findOne(+id);
  }

  @ApiResponse({ status: 201, description: 'Модуль обновлен', type: Modulee })
  @ApiResponse({ status: 401, description: 'Нет авторизации' })
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModuleeDto: UpdateModuleeDto) {
    return this.moduleeService.update(+id, updateModuleeDto);
  }

  @ApiResponse({ status: 201, description: 'Модуль удален', type: Modulee })
  @ApiResponse({ status: 401, description: 'Нет авторизации' })
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moduleeService.remove(+id);
  }
}
