import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { isExternal } from "util/types";

export class CreateShipping {
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

  }