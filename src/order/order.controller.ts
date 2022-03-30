import { Controller, Get, Query, Post, Body, Put, Param, Delete, UseGuards, Patch } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { RolesGuard } from 'src/auth/role/role.guards';
import { CreateOrder, FormOrder } from './dto';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
    constructor(private orderService:OrderService){}


    @Post()
    @UseGuards(JwtGuard, RolesGuard)
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

    
    @Patch(':id')
    @UseGuards(JwtGuard, RolesGuard)
    update(@Param('id') id,@Body() body) {
      return  this.orderService.put(id,body);
    }

   
    @Delete(':id')
    @UseGuards(JwtGuard, RolesGuard)
    delete(@Param('id') id) {
      return  this.orderService.delete(id);
    }
}
