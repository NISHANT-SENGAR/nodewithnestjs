import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! this is nestjs';
  }
  getDate(): string {
    return 'data from nestjs';
  }
}
