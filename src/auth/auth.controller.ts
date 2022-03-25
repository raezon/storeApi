import { Body, Controller, Get, Post, Redirect, Req, Request, Res } from "@nestjs/common";
import { Response } from "express";
import { User } from "src/decorator/user.decorator";
import { AuthService } from "./auth.service";
import { signInDto, signUpDto } from "./dto";


//global route
@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Get('hi')
    hello(){
        return this.authService.hello()
    }
    @Post('signup')
    signup(@Body() dto:signUpDto,@Req() request: Request,@User() user){
        user=request.body
        return user
    }
    @Post('signin')
    @Redirect('http://127.0.0.1:3333/user', 301)
    async signin(@Body() dto:signInDto,@Res() res: Response){
       let user=await this.authService.signin(dto)
       res.send(user)
    }

}