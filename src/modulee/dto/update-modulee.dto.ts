import { PartialType } from '@nestjs/mapped-types';
import { CreateModuleeDto } from './create-modulee.dto';

export class UpdateModuleeDto extends PartialType(CreateModuleeDto) {}
