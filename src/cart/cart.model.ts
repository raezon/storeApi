import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Category } from 'src/category/category.model';
import { Product } from 'src/product/product.model';
import { User } from 'src/user/user.model';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {

    @Prop()
    price: number;

    @Prop()
    quantity: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    productId: Product;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    categoryId: Category;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    userId: User;
}

export const CartSchema = SchemaFactory.createForClass(Cart);