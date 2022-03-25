import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { isExternal } from "util/types";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    slug: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    @IsString()
    photo: string;

    @IsNotEmpty()
    @IsString()
    categoryId: string;
  }