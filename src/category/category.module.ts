import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryResolver } from 'src/category/category.resolver';
import { CategoryController } from './category.controller';
import { CategorySchema } from './category.model';
import { CategoryService } from './category.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Category', schema: CategorySchema}])],
    controllers: [CategoryController],
    providers: [CategoryService,CategoryResolver],
})

export class CategoryModule {
  
}
