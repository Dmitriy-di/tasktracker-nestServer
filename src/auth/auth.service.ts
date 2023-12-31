import { Injectable } from '@nestjs/common';
import { SubjectService } from 'src/subject/subject.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private subjectService: SubjectService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const subject = await this.subjectService.findOne(email);
    if (subject && (await bcrypt.compare(pass, subject.password))) {
      const { password, ...result } = subject;
      return result;
    }
    return null;
  }

  async login(subject: any) {
    const payload = { email: subject.subject.email, sub: subject.subject.id };
    return {
      access_token: this.jwtService.sign(payload),
      isModerator: subject.subject.isModerator,
      email: subject.subject.email,
    };
  }
}
