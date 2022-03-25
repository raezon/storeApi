import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartController } from 'src/cart/cart.controller';
import { CartSchema } from 'src/cart/cart.model';
import { CartService } from 'src/cart/cart.service';


@Module({
  imports: [MongooseModule.forFeature([{name: 'Cart', schema: CartSchema}])],
  controllers: [CartController],
  providers: [CartService],
})

export class CartModule { }
