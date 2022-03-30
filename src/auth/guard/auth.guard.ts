import { CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";

/*export class JwtGuard extends AuthGuard('jwt'){
    constructor(){
        super()
    }
}*/
export class JwtGuard extends AuthGuard('jwt') implements CanActivate{
    constructor(){
        super()
    }
    canActivate(context: ExecutionContext) {

        const request=context.switchToHttp().getRequest()
        return request.session.user;
        
    }
}