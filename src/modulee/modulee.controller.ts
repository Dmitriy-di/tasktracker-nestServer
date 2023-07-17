import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModuleeService } from './modulee.service';
import { CreateModuleeDto } from './dto/create-modulee.dto';
import { UpdateModuleeDto } from './dto/update-modulee.dto';

@Controller('modulee')
export class ModuleeController {
  constructor(private readonly moduleeService: ModuleeService) {}

  @Post()
  create(@Body() createModuleeDto: CreateModuleeDto) {
    return this.moduleeService.create(createModuleeDto);
  }

  @Get()
  findAll() {
    return this.moduleeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moduleeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModuleeDto: UpdateModuleeDto) {
    return this.moduleeService.update(+id, updateModuleeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moduleeService.remove(+id);
  }
}
