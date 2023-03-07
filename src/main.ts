import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  dotenv.config({
    path: resolve('./', '.env'),
  });

  const config = new DocumentBuilder()
    .setTitle('Online Cinema API')
    .setDescription('The API of the project Online Cinema')
    .addBearerAuth()
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      defaultModelsExpandDepth: 0, // models closed at first
      docExpansion: 'none', // hide the models
    },
  });

  await app.listen(3000);
}
bootstrap();
