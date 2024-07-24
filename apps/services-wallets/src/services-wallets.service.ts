import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicesWalletsService {
  getHello(): string {
    return 'Hello World!';
  }
}
