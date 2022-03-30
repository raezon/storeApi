import { Param } from "@nestjs/common";
import { Args, Parent, Query, ResolveField, ResolveProperty, Resolver } from "@nestjs/graphql";
import { CategoryService } from "src/category/category.service";
import { Category, Product } from "src/schema/graphql";
import { ProductService } from "./product.service";

@Resolver()
export class ProductResolver{


    constructor(
        private readonly productService: ProductService,
        private readonly categoryService:CategoryService
        ) {}
    
    @Query()
    getPropertiesProduct(@Args('id') id){

        return this.productService.findOne(id);

    }
    @ResolveField()
    async categories(@Parent() product: Product) {
      const { categoryId } = product;
      return 'hi'
      return this.categoryService.find(categoryId);
    }
   
    
}