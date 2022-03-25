import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Category } from 'src/category/category.model';
import { User } from 'src/user/user.model';

export type OrderDetailDocument = OrderDetail & Document;

@Schema()
export class OrderDetail {

    @Prop()
    quantity: number;

    @Prop()
    price: number;

    @Prop()
    totalPrice: number;


}

export const OrderDetailSchema = SchemaFactory.createForClass(OrderDetail);