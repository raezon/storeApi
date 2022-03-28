import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { handleRetry } from "@nestjs/mongoose/dist/common/mongoose.utils";
import { Observable } from "rxjs";
import { UserService } from "../user.service";

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
    constructor(private userService: UserService) { }

    async intercept(context: ExecutionContext, handler: CallHandler<any>) {
        const request=context.switchToHttp().getRequest()
        const {email}=request.session.user|| {};

        if(email){
            const user= await this.userService.findOne(email);
            request.currentUser=user;
        }

        return handler.handle();
    }
}