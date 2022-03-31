import { Global, MiddlewareConsumer, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesGuard } from 'src/auth/role/role.guards';
import { JwtStrategy } from 'src/auth/strategy';
import { CurrentUserMiddleware } from 'src/middlewares/current-user.middleware';
import { UserController } from './user.controller';
import { UserSchema } from './user.model';
import { UserService } from './user.service';

@Global()
@Module({
    imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
    controllers: [UserController],
    providers: [UserService,JwtStrategy,],
    exports:[UserService]
})

export class UserModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(CurrentUserMiddleware).forRoutes('*');
      }
}
