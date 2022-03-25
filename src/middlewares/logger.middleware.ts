import { Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Role } from 'src/auth/role/role.enum';


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    
    
    /*if(req.body.roles!=Role.Admin)
        throw new NotFoundException("You are not authorized");*/
   // console.log(req.body);
    next();
  }
}
