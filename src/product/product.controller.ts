import { Controller, Get, Query, Post, Body, Put, Param, Delete, UseGuards, Redirect, NotFoundException } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CreateProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Post()
  // @UseGuards(JwtGuard)
  create(@Body() dto: CreateProductDto) {

    return this.productService.create(dto);
  }

  @Get()
  //@Redirect('https://nestjs.com', 302)
  findAll() {

    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param() id){
    return this.productService.findOne(id);
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
