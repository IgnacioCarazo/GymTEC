import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MachineTypeService } from 'src/app/services/machine-type.service';

@Component({
  selector: 'app-machine-type-edit',
  templateUrl: './machine-type-edit.component.html',
  styleUrls: ['./machine-type-edit.component.css']
})
export class MachineTypeEditComponent implements OnInit {

  id!: number;
  editMode = false;
  form!: FormGroup;
  
  constructor(private route: ActivatedRoute,
              private machineTypeService: MachineTypeService,
              private router: Router) { }

 
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
      this.machineTypeService.updateMachineType(this.id, this.form.value)
    } else {
      this.machineTypeService.addMachineType(this.form.value)
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
      let id = 0;
      let description = '';
      
      if (this.editMode) {
        const machineType = this.machineTypeService.getMachineType(this.id);
        name = machineType.name;
        id = machineType.id;
        description = machineType.description;
        }
       
  
  
  
       
  
      this.form = new FormGroup({
        name: new FormControl(name, Validators.required),
        id: new FormControl(id, Validators.required),
        description: new FormControl(description, Validators.required),

      });
    }
}
