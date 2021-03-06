import { Controller, Get, Query, Req, Post, Body, Put, Param, Delete, UseGuards, SetMetadata, Request, UseInterceptors, Patch } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { session } from 'passport';
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
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.User)

  findAll(@Request() req) {

    return this.userService.findAll();
  }


  @Get('profile')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles(Role.User)
  getProfile(@Request() req) {
    return req.user;
  }

  @Get(':email')
  findOne(@Param() email) {
    return this.userService.findOne(email);
  }


  @Patch(':id')
  update(@Param('id') id,@Body() body) {
    return  this.userService.put(id,body);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return  this.userService.delete(id);
  }
}
