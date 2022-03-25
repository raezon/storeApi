import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { isExternal } from "util/types";

export class UpdateCart {


    @IsNotEmpty()
    @IsString()
    quantity: number;

  }