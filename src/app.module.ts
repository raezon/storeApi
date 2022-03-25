import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { CartController } from './cart/cart.controller';
import { CartModule } from './cart/cart.module';
import { CategoryController } from './category/category.controller';
import { CategoryModule } from './category/category.module';
import { OrderDetailController } from './order-detail/order-detail.controller';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { ShippingInfoController } from './shipping-info/shipping-info.controller';
import { ShippingInfoModule } from './shipping-info/shipping-info.module';
import { WishListController } from './wish-list/wish-list.controller';
import { WishListModule } from './wish-list/wish-list.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './order/order.controller';
import { OrderModule } from './order/order.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/role/role.guards';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { JwtStrategy } from './auth/strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({

  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/'),
    PassportModule,
    JwtModule.register({
      secret: 'secret-super-nova',
      signOptions: { expiresIn: '60s' },
    }),
    AuthModule,
    UserModule,
    ProductModule,
    CartModule,
    CategoryModule,
    OrderDetailModule,
    ShippingInfoModule,
    WishListModule,
    OrderModule
  ],
  providers: [

  ]

})
export class AppModule implements NestModule { 
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({path:'user', method: RequestMethod.GET});
  }
}
