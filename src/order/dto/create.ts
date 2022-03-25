import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { isExternal } from "util/types";

export class CreateOrder {
  
    
    //relation needed for order 
    @IsNotEmpty()
    @IsString()
    categoryId: string;

    @IsNotEmpty()
    @IsString()
    customerId: string;

    @IsNotEmpty()
    @IsString()
    orderDetailId: string;

    @IsNotEmpty()
    @IsString()
    shippingId: string;

  }