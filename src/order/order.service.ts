import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateOrder, FormOrder } from './dto';
import * as argon from 'argon2'
import { Order } from './order.model';
import { OrdersRepository } from './order.repository';
@Injectable()
export class OrderService {
    constructor(private readonly orderRepository: OrdersRepository) {}

    async create(new_order: FormOrder) {
        const order =  this.orderRepository.create(new_order);
        return order
    }

    async findAll() {

        const orders =  this.orderRepository.findAll();
        return orders
    }

    async findOne(id) {

        const orders =  this.orderRepository.findOne(id);
        return orders
    }

    async put(identifier, body) {
  
        const cart = await this.orderRepository.update(identifier, body) 
        return cart
    }

    async delete(id) {

       
        return   await this.orderRepository.remove(id) 
    }
}
