import { Module } from '@nestjs/common';
import { ServicesWalletsController } from './services-wallets.controller';
import { ServicesWalletsService } from './services-wallets.service';

@Module({
  imports: [],
  controllers: [ServicesWalletsController],
  providers: [ServicesWalletsService],
})
export class ServicesWalletsModule {}
