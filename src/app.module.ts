import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { CategoryModule } from './category/category.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { ShippingInfoModule } from './shipping-info/shipping-info.module';
import { WishListModule } from './wish-list/wish-list.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './order/order.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/'),
    PassportModule,
    JwtModule.register({
      secret: 'secret-super-nova',
      signOptions: { expiresIn: '60s' },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
     playground: true,
     // plugins: [ApolloServerPluginLandingPageLocalDefault()],
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
  providers: [],

})
export class AppModule implements NestModule { 
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({path:'user', method: RequestMethod.GET});
  }
}
