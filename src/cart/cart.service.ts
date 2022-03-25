import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCart, UpdateCart } from './dto';
import { Cart } from './cart.model';

@Injectable()
export class CartService {

    constructor(@InjectModel('Cart') private cartModel: Model<Cart>) { }

    // api call for creation of a whislist
    async create(new_cart: CreateCart) {
        let cart;
        try {
            cart = new this.cartModel(new_cart).save()
            if (cart)
                return cart
        } catch (error) {
            throw new NotFoundException("Cart already exist you can not duplicate product");

        }

    }
    // api for retrieving all users
    async findAll() {
        const carts = this.cartModel.find();
        if (carts)
            carts.populate('userId');
        carts.populate('categoryId');
        carts.populate('productId');

        return carts
    }

    async find(id) {
        const cart = this.cartModel.findById(id);
        if (cart)
            cart.populate('userId');
        cart.populate('categoryId');
        cart.populate('productId');

        return cart
    }

    async put(identifier, body) {
   
     
       

        const filter = { id: identifier };
        const update = { quantity: body.qte };
        
        const cart = await this.cartModel.findOneAndUpdate(filter, update) 

        return cart

    }

    async delete() {

    }



}
