import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "../models/product.model";
import { Service } from "../models/service.model";

@Injectable()
export class ProductService {

    private products: Product[] = [];
    productsChanged = new Subject<Product[]>();
  
    constructor() {
  
      this.products = [new Product("Producto 1"), new Product("Producto 2"), new Product("Producto 3")];
    }
  
    /**
    * @name getProducts()
    * @returns The array of products of this service.  
    */
     getProducts() {
      return this.products.slice();
    }
  
     /**
    * @name getProduct()
    * @description It searches a job by its index
    * @returns {Service} A product
    */
      getProduct(index: number) {
        return this.products[index];
      }
  
       /**
    * @name deleteProduct()
    * @argument {number} index
    * @description deletes a job by its index from this product devices array.
    */
      deleteProduct(index: number) {
      this.products.splice(index, 1);
      this.productsChanged.next(this.products.slice());
    }
  
     /**
    * @name addProduct()
    * @argument {Product} product
    * @description  Adds a service to this product array of devices
    */
      addProduct(product: Product) {
        this.products.push(product);
        this.productsChanged.next(this.products.slice());
      }
   
    /**
    * @name updateProduct()
    * @argument {number} index
    * @argument {Product} newProduct
    * @description  It updates the value of a product of this service devices array. 
    */
     updateProduct(index: number, newProduct: Product) {
      this.products[index] = newProduct;
      this.productsChanged.next(this.products.slice());
    }

    
  }