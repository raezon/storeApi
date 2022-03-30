import { Controller, Get, Query, Post, Body, Put, Param, Delete, UseGuards, Redirect, NotFoundException, Patch } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { RolesGuard } from 'src/auth/role/role.guards';
import { CreateProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }

  @Post()
  @UseGuards(JwtGuard, RolesGuard)
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

  @UseGuards(JwtGuard, RolesGuard)
  @Patch(':id')
  update(@Param('id') id,@Body() body) {
    return  this.productService.put(id,body);
  }
  @UseGuards(JwtGuard, RolesGuard)
  @Delete(':id')
  delete(@Param('id') id) {
    return  this.productService.delete(id);
  }
}
