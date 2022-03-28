import { Param } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { CategoryService } from "src/category/category.service";

@Resolver()
export class CategoryResolver{


    constructor(private readonly categoryService: CategoryService) {}
    
    @Query()
    getName(@Args('id') id: String){
        return  this.categoryService.find({_id:"62409d5f3ec668094456f2fb"})
    }
}