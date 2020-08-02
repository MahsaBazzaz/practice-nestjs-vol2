import { Controller, Post, Body, Get,Param, Patch } from "@nestjs/common";
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
    @Get()
    getProducts(){
        return this.productService.getAllProducts();
    }

    @Get(':title')
    getProduct(@Param('title') proTitle:string){
        return this.productService.getAproduct(proTitle);
    }
    @Patch(':title')
    updateProduct(@Param('title') proTitle:string){
        return this.productService.deleteProduct(proTitle);
    }
}