import { Controller, Get, Query, Post, Body, Put, Param, Delete, UseGuards, UseInterceptors, Patch } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CategoryDto, CreateCategoryDto } from './dto';
import { CategoryService } from './category.service';
import { SerializeInterceptor } from '../interceptors/serialize.interceptors';
import { Serialize } from 'src/decorator/serialize.decorator';
import { RolesGuard } from 'src/auth/role/role.guards';


@Controller('category')
export class CategoryController {
    constructor(private categoryService:CategoryService){}

    @Post()
    @UseGuards(JwtGuard, RolesGuard)
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

    @Patch(':id')
    @UseGuards(JwtGuard, RolesGuard)
    update(@Param('id') id,@Body() body) {
      return  this.categoryService.put(id,body);
    }

    @Delete(':id')
    @UseGuards(JwtGuard, RolesGuard)
    delete(@Param('id') id) {
      return  this.categoryService.delete(id);
    }
}
