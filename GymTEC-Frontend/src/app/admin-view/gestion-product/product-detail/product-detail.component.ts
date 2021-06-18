import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  id!: number;

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.product = this.productService.getProduct(this.id);
        }
      );
  }

  /**
  * @name onEditProduct()
  * @description Sets the link to 'edit'. 
  */
   onEditProduct() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  /**
  * @name onDeleteProduct()
  * @description Deletes the current device and sets the link back to '/devices'.
  */
   onDeleteProduct() {
    //this.dataStorageService.deleteDevice(this.device);
    this.productService.deleteProduct(this.id);
  }

}