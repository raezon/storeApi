import { Controller, Get, Query, Post, Body, Put, Param, Delete, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CategoryDto, CreateCategoryDto } from './dto';
import { CategoryService } from './category.service';
import { SerializeInterceptor } from '../interceptors/serialize.interceptors';
import { Serialize } from 'src/decorator/serialize.decorator';


@Controller('category')
export class CategoryController {
    constructor(private categoryService:CategoryService){}

    @Post()
   // @UseGuards(JwtGuard)
    create(@Body() dto:CreateCategoryDto) {
     
      return  this.categoryService.create(dto);
    }
  
    @Serialize(CategoryDto)
    @Get()
    findAll() {
     
      return   this.categoryService.findAll();
    }

    @Get(":id")
    findOne(@Param() id) {
      return   this.categoryService.find(id);
    }

    @Put()
    update() {
      return 'This action returns all cats';
    }

    @Delete()
    delete() {
      return 'This action returns all cats';
    }
}
