import { Injectable} from "@nestjs/common";
import {Product} from './product.model';

@Injectable()
export class ProductService{
    private products : Product[] = [];

    insertProduct(title:string,desc:string,price:number):string{
        const productID = new Date().toString();
        const newProduct = new Product(productID,title,desc,price);
        this.products.push(newProduct);
        return productID;
    }

    getAllProducts(): Product[]{
        return this.products.slice();
    }
    
}