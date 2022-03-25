import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { isExternal } from "util/types";

export class CreateOrderDetail {
    @IsNotEmpty()
    @IsString()
    price: number;

    @IsNotEmpty()
    @IsString()
    quantity: number;

    @IsNotEmpty()
    @IsString()
    totalPrice: number;



  }