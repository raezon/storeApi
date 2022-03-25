import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WhishList, WhishListSchema } from './whish-list.model';
import { WishListController } from './wish-list.controller';
import { WishListService } from './wish-list.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'WhishList', schema: WhishListSchema}])],
  controllers: [WishListController],
  providers: [WishListService],
})

export class WishListModule { }
