import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicesAuthService {
  getHello(): string {
    return 'Hello World!';
  }
}
