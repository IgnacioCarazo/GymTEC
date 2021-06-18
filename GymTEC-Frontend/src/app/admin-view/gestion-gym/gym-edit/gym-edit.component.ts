import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-gym-edit',
  templateUrl: './gym-edit.component.html',
  styleUrls: ['./gym-edit.component.css']
})
export class GymEditComponent implements OnInit {
  id!: number;
  editMode = false;
  gymForm!: FormGroup;
  spa!: boolean;
  store!: boolean;
  constructor(private route: ActivatedRoute,
              private gymService: GymService,
              private router: Router) { }

 
  ngOnInit() {
    this.spa = false;
    this.store = false;
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
     console.log(this.gymForm.value);

    if (this.editMode) {
      this.gymService.updateGym(this.id, this.gymForm.value)
    } else {
      this.gymService.addGym(this.gymForm.value)
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
      let spaActive = false;
      let storeActive = false;
      let openingDate = '';
      let businessHours = '';
      let maxCapacity = 0;
      let phoneNumbers = '';

      if (this.editMode) {
        const gym = this.gymService.getGym(this.id);
        this.spa = gym.spaActive;
        this.store = gym.storeActive;
        name = gym.name;
        spaActive = gym.spaActive;
        storeActive = gym.storeActive;
        openingDate = gym.openingDate;
        businessHours = gym.businessHours;
        maxCapacity = gym.maxCapacity;
        phoneNumbers = gym.phoneNumbers;
        }
       
  
  
  
       
  
      this.gymForm = new FormGroup({
        name: new FormControl(name, Validators.required),
        spaActive: new FormControl(spaActive),
        storeActive: new FormControl(storeActive),
        openingDate: new FormControl(openingDate, Validators.required),
        businessHours: new FormControl(businessHours),
        maxCapacity: new FormControl(maxCapacity, Validators.required),
        phoneNumbers: new FormControl(phoneNumbers, Validators.required),
      });
    }
}
