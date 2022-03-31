import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './category.model';
import { CreateCategoryDto } from './dto/create.dto';
import * as argon from 'argon2'
import { CategoryDto } from './dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel('Category') private categoryModel: Model<Category>) { }

    async create(new_category: CreateCategoryDto): Promise<Category> {
        let category;

        try {
            category = new this.categoryModel(new_category).save();
            if (category)
                return category

        } catch (error) {
            throw new NotFoundException("email already taken");

        }
    }
    async find(id) {

        return await this.categoryModel.findById(id);
    }
    async findAll() {

        return await this.categoryModel.find();
    }



    async put(identifier, body) {
        const filter = { id: identifier };
        const update = { quantity: body.qte };
        const cart = await this.categoryModel.findOneAndUpdate(filter, update)
        return cart
    }

    async delete(id) {

        const cart = await this.categoryModel.deleteOne(id)
        return cart
    }
}
