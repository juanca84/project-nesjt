import { Controller, Get, HttpCode, Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Cache-Control', 'none')
  @Header('Authorization', '123abc')
  @HttpCode(300)
  getHello(): string {
    return this.appService.getHello();
  }
}
