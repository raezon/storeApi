import { Controller, Get, Query,Req , Post, Body, Put, Param, Delete, UseGuards, SetMetadata, Request, UseInterceptors } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { Role } from 'src/auth/role/role.enum';
import { Roles } from 'src/auth/role/roles.decorator';
import { User } from 'src/decorator/user.decorator';
import { LoggingInterceptor } from 'src/interceptors/logger.interceptors';
import { CreateUserDto } from './dto';
import { FormUserDto } from './dto/form.dto';
import { UserService } from './user.service';

@UseInterceptors(new LoggingInterceptor())
@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() dto: CreateUserDto) {

    return this.userService.create(dto);
  }
  

  @Roles(Role.User)
  @UseGuards(JwtGuard)
  @Get()

  findAll(@Request() req) {
  
    return 'This action returns all cats';
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
