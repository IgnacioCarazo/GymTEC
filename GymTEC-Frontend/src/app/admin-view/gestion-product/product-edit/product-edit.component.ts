import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id!: number;
  editMode = false;
  form!: FormGroup;
  
  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private router: Router,
              private dataStorageService : DataStorageService) { }

 
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  /**
  * @name onSubmit()
  * @description Depending if its edit mode or add new recipe mode it will update or add the current recipe.
  */
   onSubmit() {
     console.log(this.form.value);

    if (this.editMode) {
      this.productService.updateProduct(this.id, this.form.value);
      this.dataStorageService.updateProduct(this.form.value);
    } else {
      this.productService.addProduct(this.form.value);
      this.dataStorageService.storeProduct(this.form.value);
    }
    this.onCancel();
  }

  /**
  * @name onCancel()
  * @description Returns the link to its previous link.
  */
   onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

   /**
  * @name initForm()
  * @description If its edit mode it will load the inputs of the form with the preexistent values of the recipe. Otherwise
  * it will just set thes values 'empty' for the user to fill.
  */
    private initForm() {
      let name = '';
      let barCode = 0;
      let cost = 0;
      let description = '';
      
      if (this.editMode) {
        const product = this.productService.getProduct(this.id);
        name = product.name;
        cost = product.cost;
        description = product.description;
        barCode = product.barCode;
        }
       
  
  
  
       
  
      this.form = new FormGroup({
        name: new FormControl(name, Validators.required),
        cost: new FormControl(cost),
        description: new FormControl(description, Validators.required),
        barCode: new FormControl(barCode, Validators.required),
        gymName: new FormControl(""),


      });
    }
}
