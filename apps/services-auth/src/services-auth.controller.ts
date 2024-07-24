import { Controller, Get } from '@nestjs/common';
import { ServicesAuthService } from './services-auth.service';

@Controller()
export class ServicesAuthController {
  constructor(private readonly servicesAuthService: ServicesAuthService) {}

  @Get()
  getHello(): string {
    return this.servicesAuthService.getHello();
  }
}
