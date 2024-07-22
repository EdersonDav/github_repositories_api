import { NestFactory } from '@nestjs/core';
import { AppModule } from './server/app/app.module';
import {env} from './config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = env.api.PORT || 5555
  await app.listen(PORT, () => {
    console.log(`App running on port ${PORT} and environment ${env.api.NODE_ENV}`)
  });
}
bootstrap();
