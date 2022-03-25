import { Controller, Get, Query, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CreateOrder, FormOrder } from './dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService:OrderService){}

    @Post()
   // @UseGuards(JwtGuard)
    create(@Body() dto:FormOrder) {
     
     return  this.orderService.create(dto);
    }
  
    @Get()
    findAll() {
      return  this.orderService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id) {
      return  this.orderService.findOne(id)
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
