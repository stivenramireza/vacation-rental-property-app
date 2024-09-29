import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');

  const config = app.get(ConfigService);
  const port = config.get('PORT');
  const environment = config.get('ENV');
  const apiVersion = config.get('API_VERSION');

  app.setGlobalPrefix(`/api/${apiVersion}`);

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  });

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

  const documentConfig = new DocumentBuilder()
    .setTitle('Vacation Rental Property API')
    .setDescription('Vacation Rental Property API endpoints')
    .setVersion('0.1.0')
    .build();
  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(port);
  logger.log(`App running at port ${port} in ${environment} mode`);
}

bootstrap();
