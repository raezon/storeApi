import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { CreateUserDto } from './dto/user.dto';
import * as argon from 'argon2'
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<User>) { }

    async create(new_user: CreateUserDto): Promise<User> {
        let user;
        const hash = await argon.hash(new_user.password);
        new_user.password = hash
        try {
            user = new this.userModel(new_user).save();
            if (user)
                return user

        } catch (error) {
            throw new NotFoundException("email already taken");

        }



    }
    async findAll() {
        return await this.userModel.find();
    }
    async findOne(parms) {
        return await this.userModel.findOne({"email":parms});
    }

    async put(identifier, body) {
        const filter = { id: identifier };
        const update = { quantity: body.qte };
        const cart = await this.userModel.findOneAndUpdate(filter, update) 
        return cart
    }

    async delete(id) {

        const cart= await this.userModel.deleteOne(id) 
        return cart
    }
}
