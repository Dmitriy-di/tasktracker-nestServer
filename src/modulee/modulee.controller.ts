import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ModuleeService } from './modulee.service';
import { CreateModuleeDto } from './dto/create-modulee.dto';
import { UpdateModuleeDto } from './dto/update-modulee.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('modulee')
export class ModuleeController {
  constructor(private readonly moduleeService: ModuleeService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createModuleeDto: CreateModuleeDto) {
    return this.moduleeService.create(createModuleeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.moduleeService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moduleeService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModuleeDto: UpdateModuleeDto) {
    return this.moduleeService.update(+id, updateModuleeDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moduleeService.remove(+id);
  }
}
