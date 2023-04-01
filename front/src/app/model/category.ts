import { ProductApi } from "./product-api";

export class Category {
    id!:number;
    name!:string;
    products!:ProductApi[];
}
