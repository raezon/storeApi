import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserService } from 'src/user/user.service';


declare global {
  namespace Express {
    interface Request {
      currentUser?: User;
    }
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(private usersService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { user } = req.session || {};

    if (user) {
      
      const userConntected = await this.usersService.findOne(user.email);
      console.log(userConntected)
      req.currentUser = userConntected;
      req.user = userConntected;
    }
    next();
  }
}
