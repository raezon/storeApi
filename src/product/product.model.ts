import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Category } from 'src/category/category.model';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  slug: string;

  @Prop()
  price: number;

  @Prop()
  quantity: number;

  @Prop()
  photo: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  categoryId: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);