import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');

  const config = app.get(ConfigService);
  const port = config.get('PORT');
  const environment = config.get('ENV');
  const apiVersion = config.get('API_VERSION');

  app.setGlobalPrefix(`/api/${apiVersion}`);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  );

  await app.listen(port);
  logger.log(`App running at port ${port} in ${environment} mode`);
}

bootstrap();
