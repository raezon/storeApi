import { Body, Controller, Get, Post, Redirect, Req, Request, Res, Session, UseInterceptors } from "@nestjs/common";
import { Response } from "express";
import { User } from "src/decorator/user.decorator";
import { CurrentUser } from "src/user/decorator/user.decorator";
import { CurrentUserInterceptor } from "src/user/interceptors/current-user.interceptor";
import { AuthService } from "./auth.service";
import { signInDto, signUpDto } from "./dto";


//global route
@UseInterceptors(CurrentUserInterceptor)
@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Get('hi')
    hello(){
        return this.authService.hello()
    }
    @Post('signup')
    signup(@Body() dto:signUpDto,@Req() request: Request,@User() user,@Session() session){
        const cred= this.authService.signup(dto)
        session.user=user
        return cred
    }
    
    /*@Get('/whoami')
    whoAmI(@Session() session:any){
        return session.user;
    }*/

    @Get('/whoami')
    whoAmi(@CurrentUser() user:string){
        return user;
    }

    @Post('signin')
    async signin(@Body() dto:signInDto,@Session() session){
       let user=await this.authService.signin(dto)
       session.user=user
       return user
    }

    @Post('/signout')
    sigOut(@Session() session:any){
        session.user=null
    }

}