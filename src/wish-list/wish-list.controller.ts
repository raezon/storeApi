import { Body, Controller, Delete, Get, NotFoundException, Post, Put, Redirect } from '@nestjs/common';
import { CreateWhishListDto } from './dto';
import { WishListService } from './wish-list.service';

@Controller('wish-list')
export class WishListController {
    constructor(private whishListService:WishListService){}

    @Post()
   // @UseGuards(JwtGuard)
    create(@Body() dto:CreateWhishListDto) {
     
      return  this.whishListService.create(dto);
    }
  
    @Get()
    //@Redirect('https://nestjs.com', 302)
    findAll() {
      return  this.whishListService.findAll();
    }

    @Get()
    findOne(): string {
      return 'This action returns all cats';
    }

    @Put()
    update(): string {
      return 'This action returns all cats';
    }

    @Delete()
    delete(): string {
      return 'This action returns all cats';
    }
}
