import { Module } from '@nestjs/common';
import { ServicesAuthController } from './services-auth.controller';
import { ServicesAuthService } from './services-auth.service';

@Module({
  imports: [],
  controllers: [ServicesAuthController],
  providers: [ServicesAuthService],
})
export class ServicesAuthModule {}
