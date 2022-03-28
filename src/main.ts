import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { RolesGuard } from './auth/role/role.guards';
const cookiesSession=require('cookie-session')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookiesSession({
    keys:['sessions-secret-key842d']
  }))
  app.useGlobalPipes(new ValidationPipe({whitelist:true}));
  await app.listen(3333);
}
bootstrap();
