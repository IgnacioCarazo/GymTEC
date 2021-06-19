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
  * @name setProducts()
  * @argument {Product[]} products
  * @description  It set this service jobs with the value of the jobs argument.
  */
    setProducts(products: Product[]) {
      this.products = products;
      this.productsChanged.next(this.products.slice());
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

        /**
    * @name getGymProducts()
    * @returns The array of machines registered to the gym. 
    * @description If switch = 0 returns products_aux (machines belongin to the gym), if switch = 1
    * returns machines without a gym 
    */
    getGymProducts(gymName: string, switchX: number) {
      let products_aux: Product[] = [];
      let products_aux_2: Product[] = [];
      for (let product of this.products) {
        if (product.gymName === gymName) {
            products_aux.push(product)
        } if (product.gymName === "") {
            products_aux_2.push(product)
        }
      }
      if (switchX === 1) {
          return products_aux_2
      } else {
          return products_aux
      }
    }



      /**
    * @name getProductBySN()
    * @description It searches a product by its barCode
    * @returns {Product} A product 
    */
       getProductBySN(barCode: string): any {
        for (let product of this.products) {
            if (product.barCode === barCode) {
              return product;
            } 
          }
      }

  /**
* @name getProductBySN()
* @description It searches a machine by its index
* @returns {Product} A product 
*/
  getProductIndexBySN(barCode: string): any {
    let cont = 0;
    for (let product of this.products) {
        if (product.barCode === barCode) {
          return cont;
         } else {
          cont += 1;
      }
    }
   }
    
  }