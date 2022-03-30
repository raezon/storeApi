import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';
import { CreateProductDto } from './dto';


@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private productModel: Model<Product>) { }

    async create(new_product: CreateProductDto): Promise<Product> {
        let product;
      
        try {
            product = new this.productModel(new_product).save();
            if (product)
                return product

        } catch (error) {
            throw new NotFoundException("email already taken");

        }
    }

    async findAll(){
        return await this.productModel.find().populate('categoryId')
    }

    async findOne(id){
        const product= await this.productModel.findById(id);
     //   await product.populate('categoryId')
        return product
    }
}
