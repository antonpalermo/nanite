import { NestFactory } from '@nestjs/core';
import { ServicesAuthModule } from './services-auth.module';

async function bootstrap() {
  const app = await NestFactory.create(ServicesAuthModule);
  await app.listen(3000);
}
bootstrap();
