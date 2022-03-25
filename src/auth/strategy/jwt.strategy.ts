import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import {
  ExtractJwt,
  Strategy,
} from 'passport-jwt';
import { User } from 'src/user/user.model';


@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
  'jwt',
) {
  constructor(
   // config: ConfigService,
    @InjectModel('User') private userModel: Model<User>,
  ) {
    super({
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      //secretOrKey: config.get('JWT_SECRET'),
      secretOrKey:"secret-super-nova"
    });
  }

  async validate(payload: any) {
    const user =
      await this.userModel.findOne({'_id': payload.sub,}).exec();
      return user;
    //return {usename:user.usename,email:user.email,rolea:user.roles};
  }
}