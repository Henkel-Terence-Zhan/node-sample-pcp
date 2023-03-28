import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        strategy: 'excludeAll',
      },
    }),
  );

  {
    const config = new DocumentBuilder()
      .setTitle('Product Category')
      .setDescription(
        `Knowledge Transfer -- Implementing Product Categories.
        <a href="/api-json" target="_blank">API JSON</a>`,
      )
      .setVersion('0.1')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(process.env.PORT || 3000).then((value) => {
    console.log(`Listening on port ${value.address().port}`);
    console.log(`Swagger UI URL: http://localhost:${value.address().port}/api`);
  });
}
bootstrap();
