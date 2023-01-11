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
}
