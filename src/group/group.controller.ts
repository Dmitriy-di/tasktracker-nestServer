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
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Group } from './entities/group.entity';

@ApiTags('Group')
@ApiBearerAuth()
@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @ApiResponse({ status: 201, description: 'Группа создана', type: Group })
  @ApiResponse({ status: 401, description: 'Нет авторизации' })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.groupService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(+id, updateGroupDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupService.remove(+id);
  }
}
