import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationFilter } from './common/filters/validation.filter';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://main.d3g541h41hp0zb.amplifyapp.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
   allowedHeaders: 'Content-Type, Authorization, Cookie',
    credentials: true, // Required for cookies
  });
  app.useGlobalFilters(new ValidationFilter());
  app.use(cookieParser())
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
