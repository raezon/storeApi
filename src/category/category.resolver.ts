import { Param } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { CategoryService } from "src/category/category.service";

@Resolver()
export class CategoryResolver{


    constructor(private readonly categoryService: CategoryService) {}
    
    @Query()
    getPropertiesCategory(@Args('id') id: String){

        return this.categoryService.find(id);

    }

   
    
}