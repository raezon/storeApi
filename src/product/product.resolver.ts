import { Param } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { CategoryService } from "src/category/category.service";
import { ProductService } from "./product.service";

@Resolver()
export class ProductResolver{


    constructor(private readonly productService: ProductService) {}
    
    @Query()
    getPropertiesProduct(@Args('id') id: String){

        return this.productService.findOne(id);

    }

   
    
}