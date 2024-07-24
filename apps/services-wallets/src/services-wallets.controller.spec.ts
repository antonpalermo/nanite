import { Test, TestingModule } from '@nestjs/testing';
import { ServicesWalletsController } from './services-wallets.controller';
import { ServicesWalletsService } from './services-wallets.service';

describe('ServicesWalletsController', () => {
  let servicesWalletsController: ServicesWalletsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServicesWalletsController],
      providers: [ServicesWalletsService],
    }).compile();

    servicesWalletsController = app.get<ServicesWalletsController>(
      ServicesWalletsController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(servicesWalletsController.getHello()).toBe('Hello World!');
    });
  });
});
