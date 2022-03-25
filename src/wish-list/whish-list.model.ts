import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Category } from 'src/category/category.model';
import { Product } from 'src/product/product.model';
import { User } from 'src/user/user.model';

export type WhishListDocument = WhishList & Document;

@Schema()
export class WhishList {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    productId: Product;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    categoryId: Category;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    userId: User;
}

export const WhishListSchema = SchemaFactory.createForClass(WhishList);