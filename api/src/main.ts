import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { port } from '../configuration';
async function bootstrap() {
  
  console.log('PORT ', port);
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
