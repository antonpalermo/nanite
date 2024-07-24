import { Test, TestingModule } from '@nestjs/testing';
import { ServicesAuthController } from './services-auth.controller';
import { ServicesAuthService } from './services-auth.service';

describe('ServicesAuthController', () => {
  let servicesAuthController: ServicesAuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServicesAuthController],
      providers: [ServicesAuthService],
    }).compile();

    servicesAuthController = app.get<ServicesAuthController>(
      ServicesAuthController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(servicesAuthController.getHello()).toBe('Hello World!');
    });
  });
});
