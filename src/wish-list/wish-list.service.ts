import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { CreateWhishListDto } from './dto';
import { WhishList } from './whish-list.model';

@Injectable()
export class WishListService {

    constructor(@InjectModel('WhishList') private whishListModel:Model<WhishList>){}
 
    // api call for creation of a whislist
    async create(new_whish_list:CreateWhishListDto){
        let whishList;
        try {
            whishList=new this.whishListModel(new_whish_list).save()
            if(whishList)
                return whishList
        } catch (error) {
            throw new NotFoundException("whish list already exist you can not duplicate product");
            
        }

    }
    // api for retrieving all users
    async findAll(){
        const whishLists= this.whishListModel.find();
        if(whishLists)
        whishLists.populate('userId');
        whishLists.populate('categoryId');
        whishLists.populate('productId');

        return whishLists
    }



}
