import { ForbiddenException, Injectable } from "@nestjs/common";
import * as argon from 'argon2'
import { JwtModule, JwtService } from "@nestjs/jwt";
import { signInDto, signUpDto } from "./dto";
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from "src/user/user.model";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
    constructor(@InjectModel('User') private userModel: Model<User>, private jwt: JwtService) { }
    hello() {
        return { 'msg': "Hello it's me songoku " }
    }
    async signup(new_user: signUpDto) {

        let user;
        new_user.password = await argon.hash(new_user.password);
        try {
       
            user = new this.userModel(new_user).save();
            delete user.password;
            return user
        } catch (error) {

            throw new ForbiddenException("Credentials  taken you");
        }


    }
    async signin(dto: signInDto) {
        const user = await this.userModel.findOne({
            'email': dto.email
        })

        if (!user) {
            throw new ForbiddenException("user does not exist");

        }
        const verify = argon.verify(user.password, dto.password)

        if (!verify) {
            throw new ForbiddenException("Wrong Credentials ");

        } else {
            const token = await this.signToken(user.id, user.email);
            return {
                "email": user.email,
                "password": user.password,
                "roles": user.roles,
                "token": token
            }
        }

    }
    async signToken(userId: number, email: string): Promise<{ access_token: string }> {
        const payload = {
            sub: userId,
            email,
        };
        //     const secret = this.config.get('JWT_SECRET')
        const secret = 'secret-super-nova'
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: secret,
        })

        return {
            access_token: token,
        };
    }
}
