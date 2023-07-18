import { Injectable } from '@nestjs/common';
import { SubjectService } from 'src/subject/subject.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private subjectService: SubjectService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const subject = await this.subjectService.findOne(email);
    if (subject && (await bcrypt.compare(pass, subject.password))) {
      const { password, ...result } = subject;
      return result;
    }
    return null;
  }
}
