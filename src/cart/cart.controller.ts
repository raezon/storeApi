import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, Redirect, UseGuards } from '@nestjs/common';
import { CreateCart } from './dto';
import { CartService } from './cart.service';
import { RolesGuard } from 'src/auth/role/role.guards';
import { JwtGuard } from 'src/auth/guard';

@Controller('cart')
export class CartController {
    constructor(private cartService:CartService){}

    @Post()
    @UseGuards(JwtGuard, RolesGuard)
    create(@Body() dto:CreateCart) {
     
      return  this.cartService.create(dto);
    }
  
    @Get()
    //@Redirect('https://nestjs.com', 302)
    findAll() {
      return  this.cartService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id) {
      return  this.cartService.find(id);
    }

    @Patch(':id')
    @UseGuards(JwtGuard, RolesGuard)
    update(@Param('id') id,@Body() body) {
      return  this.cartService.put(id,body);
    }

    @Delete(':id')
    @UseGuards(JwtGuard, RolesGuard)
    delete(@Param('id') id) {
      return  this.cartService.delete(id);
    }
}
