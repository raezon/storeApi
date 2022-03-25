import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true , unique: true },
        password: { type: String, required: true },
        roles:{type:String,required:true}
    },
    {
        timestamps: true
    }
);

export interface User extends mongoose.Document {
    username:string,
    email:string,
    password:string,
    roles:string,
}