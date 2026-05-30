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
      service: 'NestJS API',
      timestamp: new Date(),
    };
  }

  @Get('version')
  getVersion() {
    return {
      version: '1.0.0',
      environment: 'production',
    };
  }

  @Get('user')
  getUser() {
    return {
      id: 1,
      name: 'Suresh',
      role: 'Admin',
    };
  }
}