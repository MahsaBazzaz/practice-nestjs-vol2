import { Controller, Post, Body } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller('products')
export class ProductController{
    constructor(private readonly productService : ProductService){}
    @Post()
    addProduct(
        @Body('title') title:string,
        @Body('description') proDesc:string,
        @Body('price') proPrice:number
    ):{id:string}{
        const generatedID = this.productService.insertProduct(title,proDesc,proPrice);
        return{id: generatedID}
    }
}