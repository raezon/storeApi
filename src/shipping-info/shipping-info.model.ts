import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';


export type ShippingDocument = Shipping & Document;

@Schema()
export class Shipping {

    @Prop()
    addresse: string;

    @Prop()
    transport: string;

    @Prop()
    region: string;

    @Prop()
    cost: number;

}

export const ShippingSchema = SchemaFactory.createForClass(Shipping);