import { Controller, Get } from '@nestjs/common';
import { ServicesWalletsService } from './services-wallets.service';

@Controller()
export class ServicesWalletsController {
  constructor(
    private readonly servicesWalletsService: ServicesWalletsService,
  ) {}

  @Get()
  getHello(): string {
    return this.servicesWalletsService.getHello();
  }
}
