import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT || 3000).then((value) => {
    console.log(`Listening on port ${value.address().port}`);
  });
}
bootstrap();
