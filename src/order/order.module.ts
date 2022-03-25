import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderDetailSchema } from 'src/order-detail/order-detail.model';
import { ShippingSchema } from 'src/shipping-info/shipping-info.model';
import { OrderController } from './order.controller';
import { OrderSchema } from './order.model';
import { OrdersRepository } from './order.repository';
import { OrderService } from './order.service';

@Module({
    imports: [
      MongooseModule.forFeature([{name: 'Order', schema: OrderSchema}]),
      MongooseModule.forFeature([{name: 'OrderDetail', schema: OrderDetailSchema}]),
      MongooseModule.forFeature([{name: 'Shipping', schema: ShippingSchema}]),
  ],
    controllers: [OrderController],
    providers: [OrderService,OrdersRepository],
})

export class OrderModule {
  
}
