import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { ServiceService } from 'src/app/services/service.service';
import { TreatmentService } from 'src/app/services/treatment.service';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {

  id!: number;
  editMode = false;
  form!: FormGroup;
  
  constructor(private route: ActivatedRoute,
              private serviceService: ServiceService,
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
      this.serviceService.updateService(this.id, this.form.value);
      this.dataStorageService.updateService(this.form.value);
    } else {
      this.serviceService.addService(this.form.value);
      this.dataStorageService.storeService(this.form.value);
    }
    this.dataStorageService.fetchServices(); 
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
      let id = 0;
      let description = '';
      
      if (this.editMode) {
        const service = this.serviceService.getService(this.id);
        name = service.name;
        id = service.id;
        description = service.description;
        }
       
  
  
  
       
  
      this.form = new FormGroup({
        name: new FormControl(name, Validators.required),
        id: new FormControl(id, Validators.required),
        description: new FormControl(description, Validators.required),

      });
    }
}
