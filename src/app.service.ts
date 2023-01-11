import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! son pham';
  }

  sayGoodBye(): string {
    return 'goodbye';
  }

  sayHi() {
    return 'hi';
  }
}
