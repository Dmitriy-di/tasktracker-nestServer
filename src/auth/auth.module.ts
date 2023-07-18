import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SubjectModule } from 'src/subject/subject.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [SubjectModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
