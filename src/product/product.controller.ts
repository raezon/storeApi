import { Controller, Get, Query, Post, Body, Put, Param, Delete, UseGuards, Redirect, NotFoundException } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CreateProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService:ProductService){}

    @Post()
   // @UseGuards(JwtGuard)
    create(@Body() dto:CreateProductDto) {
     
      return  this.productService.create(dto);
    }
  
    @Get()
    @Redirect('https://nestjs.com', 302)
    findAll() {
      throw new NotFoundException("not found ya ammar");
      
    //  return  this.productService.findAll();
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
