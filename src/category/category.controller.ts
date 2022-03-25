import { Controller, Get, Query, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CreateCategoryDto } from './dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryService:CategoryService){}

    @Post()
   // @UseGuards(JwtGuard)
    create(@Body() dto:CreateCategoryDto) {
     
      return  this.categoryService.create(dto);
    }
  
    @Get()
    findAll(): string {
      return 'This action returns all cats';
    }

    @Get()
    findOne(): string {
      return 'This action returns all cats';
    }

    @Put()
    update(): string {
      return 'This action returns all cats';
    }

    @Delete()
    delete(): string {
      return 'This action returns all cats';
    }
}
