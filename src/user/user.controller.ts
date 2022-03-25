import { Controller, Get, Query,Req , Post, Body, Put, Param, Delete, UseGuards, SetMetadata, Request, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtGuard } from 'src/auth/guard';
import { Role } from 'src/auth/role/role.enum';
import { RolesGuard } from 'src/auth/role/role.guards';
import { Roles } from 'src/auth/role/roles.decorator';
import { User } from 'src/decorator/user.decorator';
import { LoggingInterceptor } from 'src/interceptors/logger.interceptors';
import { CreateUserDto } from './dto';
import { FormUserDto } from './dto/form.dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() dto: CreateUserDto) {

    return this.userService.create(dto);
  }
  


  @Get()
  @UseGuards(AuthGuard('jwt'))
  @Roles(Role.Admin)

  findAll(@Request() req) {
  
    return 'This action returns all cats';
  }
  

  @Get('profile')
  @UseGuards(JwtGuard,RolesGuard )
  @Roles(Role.Admin)
  getProfile(@Request() req) {
    return req.user;
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
