import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/product/product.model';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop()
    name: string;

    @Prop()
    type: string;

    @Prop()
    colors: string;

    @Prop()
    photo: string;

}

export const CategorySchema = SchemaFactory.createForClass(Category);