import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { isExternal } from "util/types";

export class CreateCart {

    @IsNotEmpty()
    @IsString()
    price: number;

    @IsNotEmpty()
    @IsString()
    quantity: number;

    @IsNotEmpty()
    @IsString()
    productId: string;

    @IsNotEmpty()
    @IsString()
    categoryId: string;

    @IsNotEmpty()
    @IsString()
    userId: string;
  }