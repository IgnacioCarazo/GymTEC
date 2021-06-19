import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TreatmentService } from 'src/app/services/treatment.service';

@Component({
  selector: 'app-tratamientos-edit',
  templateUrl: './tratamientos-edit.component.html',
  styleUrls: ['./tratamientos-edit.component.css']
})
export class TratamientosEditComponent implements OnInit {

  id!: number;
  editMode = false;
  treatmentForm!: FormGroup;
  spa!: boolean;
  store!: boolean;
  constructor(private route: ActivatedRoute,
              private treatmentService: TreatmentService,
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
     console.log(this.treatmentForm.value);

    if (this.editMode) {
      this.treatmentService.updateTreatment(this.id, this.treatmentForm.value)
    } else {
      this.treatmentService.addTreatment(this.treatmentForm.value)
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
      
      if (this.editMode) {
        const treatment = this.treatmentService.getTreatment(this.id);
        name = treatment.name;
        id = treatment.id;
        }
       
  
  
  
       
  
      this.treatmentForm = new FormGroup({
        name: new FormControl(name, Validators.required),
        id: new FormControl(id, Validators.required),
        gymName: new FormControl("")
      });
    }
}
