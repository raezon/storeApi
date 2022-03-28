import { Expose,Exclude} from "class-transformer";

export class CategoryDto {
    @Expose()
    name:string;
    
    @Expose()
    colors:string
}