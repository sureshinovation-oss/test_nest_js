import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello() {
    return {
      message: 'Hello from NestJS',
      status: 'success',
    };
  }

  @Get('health')
  getHealth() {
    return {
      status: 'UP',
      timestamp: new Date(),
    };
  }

  @Get('version')
  getVersion() {
    return {
      app: 'test_nest_js',
      version: '1.0.0',
    };
  }
}