import { UseInterceptors,NestInterceptor,ExecutionContext,CallHandler } from "@nestjs/common";
import { Observable } from "rxjs";
import {map} from 'rxjs/operators'
import { plainToClass } from "class-transformer";
import { CategoryDto } from "../category/dto";

interface ClassConstructor{
    new (...args:any[]):{}
}
//implements is optional
export class SerializeInterceptor implements NestInterceptor {
    constructor(private dto:ClassConstructor){

    }
intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
    // Run something before a request is handled
    // by the request handler
    console.log('I m running before the handler')
   
    return next.handle().pipe(
        map((data:any)=>{
            ///Run somthing before the response is sent out
           return plainToClass(this.dto,data,{
               //to ensure everything work correctly 
               excludeExtraneousValues:true
           })
        })
    )
}
}
