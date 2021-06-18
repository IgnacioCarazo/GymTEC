import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { Service } from 'src/app/models/service.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  subscription!: Subscription;

  constructor(private productService : ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.productService.productsChanged
      .subscribe(
        (products: Product[]) => {
          this.products = products;
        }
      );
    this.products = this.productService.getProducts();
  }

  /**
  * @name onNewProduct()
  * @description Sets the link to 'new'
  */
   onNewProduct() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
