import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-machine-edit',
  templateUrl: './machine-edit.component.html',
  styleUrls: ['./machine-edit.component.css']
})
export class MachineEditComponent implements OnInit {

  id!: number;
  editMode = false;
  form!: FormGroup;
  
  constructor(private route: ActivatedRoute,
              private machineService: MachineService,
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
      this.machineService.updateMachine(this.id, this.form.value)
    } else {
      this.machineService.addMachine(this.form.value)
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
      let brand = '';
      let serialNumber = 0;
      let cost = 0;
      let typeID = 0;
      let gymName = "";
      
      if (this.editMode) {
        const machine = this.machineService.getMachine(this.id);
        brand = machine.brand;
        serialNumber = machine.serialNumber;
        cost = machine.cost;
        typeID = machine.typeID;
        gymName = machine.gymName;
        }
       
  
  
  
       
  
      this.form = new FormGroup({
        brand: new FormControl(brand, Validators.required),
        serialNumber: new FormControl(serialNumber, Validators.required),
        cost: new FormControl(cost),
        typeID: new FormControl(typeID, Validators.required),
        gymName: new FormControl(gymName),

      });
    }
}
