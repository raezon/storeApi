import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategy";
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from "src/user/user.model";
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from "./role/role.guards";
import { PassportModule } from "@nestjs/passport";


@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), 
  JwtModule.register({}),
  PassportModule.register({      
    defaultStrategy: 'jwt',      
    property: 'user',      
    session: false,    
}),  
],
  controllers: [AuthController],
  providers: [AuthService,
    JwtStrategy, 

  ]
})
export class AuthModule {

}