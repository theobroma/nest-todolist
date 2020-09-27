import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');

  if (!configService.isProduction()) {
    const document = SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('Todos Item API')
        .setDescription('My Item API for todo-list')
        .build(),
    );
    // set URL - 'localhost:3000/${prefix}'
    http: SwaggerModule.setup('apiui', app, document);
  }

  await app.listen(5000);
}
bootstrap();
