import { Controller, Get, Query, Post, Body, Put, Param, Delete, UseGuards, Redirect, NotFoundException, Patch } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { Role } from 'src/auth/role/role.enum';
import { RolesGuard } from 'src/auth/role/role.guards';
import { Roles } from 'src/auth/role/roles.decorator';
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
  @UseGuards(JwtGuard, RolesGuard)
 // @Roles(Role.User)
  findAll() {

    return this.productService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtGuard)
 // @Roles(Role.User)
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
