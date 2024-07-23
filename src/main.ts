import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './server/app/app.module';
import {env} from './config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('GitHub Users Repositories')
    .setDescription('The API about users and repositories from GitHub')
    .setVersion('1.0')
    .addTag('Import')
    .addTag('User')
    .addTag('Repositories')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  const PORT = env.api.PORT || 5555
  await app.listen(PORT, () => {
    console.log(`App running on port ${PORT} and environment ${env.api.NODE_ENV}`)
  });
}
bootstrap();
