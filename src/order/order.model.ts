import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Category } from 'src/category/category.model';
import { OrderDetail } from 'src/order-detail/order-detail.model';
import { Product } from 'src/product/product.model';
import { Shipping } from 'src/shipping-info/shipping-info.model';
import { User } from 'src/user/user.model';

export type OrderDocument = Order & Document;

@Schema()
export class Order {


    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    customerId: User;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    productId: Product;


    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'OrderDetail' })
    orderDetailId: OrderDetail;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Shipping' })
    shippingId: Shipping;
    


}

export const OrderSchema = SchemaFactory.createForClass(Order);