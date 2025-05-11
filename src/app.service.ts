import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! this is a simple test deployment for github for ci/cd pipeline.';
  }
}
