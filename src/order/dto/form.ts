import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { isExternal } from "util/types";

export class FormOrder {
    //for orderDetail
    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    quantity: number;
    //for shipping
    @IsNotEmpty()
    @IsString()
    addresse: string;

    @IsNotEmpty()
    @IsString()
    transport: string;

    @IsNotEmpty()
    @IsString()
    region: string;

    @IsNotEmpty()
    cost: number;
    
    //relation needed for order 
    @IsNotEmpty()
    @IsString()
    categoryId: string;

    @IsNotEmpty()
    @IsString()
    customerId: string;

    @IsNotEmpty()
    @IsString()
    productId: string;

  }