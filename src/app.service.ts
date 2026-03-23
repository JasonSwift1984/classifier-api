import { Injectable } from '@nestjs/common';
//start
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
