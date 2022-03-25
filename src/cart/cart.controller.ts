import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Put, Redirect } from '@nestjs/common';
import { CreateCart } from './dto';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private cartService:CartService){}

    @Post()
   // @UseGuards(JwtGuard)
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
    update(@Param('id') id,@Body() body) {
      return  this.cartService.put(id,body);
    }

    @Delete()
    delete(): string {
      return 'This action returns all cats';
    }
}
