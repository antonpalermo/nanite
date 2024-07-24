import { NestFactory } from '@nestjs/core';
import { ServicesWalletsModule } from './services-wallets.module';

async function bootstrap() {
  const app = await NestFactory.create(ServicesWalletsModule);
  await app.listen(3000);
}
bootstrap();
