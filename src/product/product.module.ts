import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from 'src/category/category.model';
import { CategoryService } from 'src/category/category.service';
import { ProductController } from './product.controller';
import { ProductSchema } from './product.model';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Product', schema: ProductSchema},
            {name: 'Category', schema: CategorySchema}
        ])
    ],
    controllers: [ProductController],
    providers: [ProductService,ProductResolver,CategoryService],
})

export class ProductModule {
  
}
