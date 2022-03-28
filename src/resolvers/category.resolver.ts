import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class CategoryResolver{
    @Query()
    getName(){
        return 'Hello  hmida'
    }

}