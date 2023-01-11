import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  testFuc1() {
    console.log('test fuc1');
  }

  testFuc2() {
    console.log('test fuc2');
  }

  testFunc5() {
    console.log('test func5');
  }

  testFuc6() {
    console.log('test6');
  }
}
