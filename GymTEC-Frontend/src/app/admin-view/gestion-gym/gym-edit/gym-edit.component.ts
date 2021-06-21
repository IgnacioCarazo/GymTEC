import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';
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
  spa2!: number;
  store2!: number;
  constructor(private route: ActivatedRoute,
              private gymService: GymService,
              private router: Router,
              private dataStorageService : DataStorageService) { }

 
  ngOnInit() {
    this.spa = false;
    this.store = false;
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
      this.dataStorageService.fetchGyms(); 

    });
  }

  /**
  * @name onSubmit()
  * @description Depending if its edit mode or add new recipe mode it will update or add the current recipe.
  */
   onSubmit() {
     if (this.gymForm.value.spaActive) {
      this.spa2 = 1;
      this.gymForm.value.spaActive = this.spa2;
     } else {
      this.spa2 = 0;
      this.gymForm.value.spaActive = this.spa2;
     }
     if (this.gymForm.value.storeActive) {
      this.store2 = 1;
      this.gymForm.value.storeActive = this.store2;
    } else {
      this.store2 = 0;
      this.gymForm.value.storeActive = this.store2;
    }
    
    if (this.editMode) {
      this.gymService.updateGym(this.id, this.gymForm.value)
      this.dataStorageService.updateGym(this.gymForm.value);


    } else {
      this.gymService.addGym(this.gymForm.value)
      this.dataStorageService.storeGym(this.gymForm.value);
      

    }
    this.dataStorageService.fetchGyms(); 

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
      let phoneNumber = '';
      let adminID = 0;

      if (this.editMode) {
        const gym = this.gymService.getGym(this.id);
        console.log(gym);
        name = gym.name;

        if (gym.spaActive === 1) {
        spaActive = true;
        this.spa = true;
        this.spa2 = 1;

        } else {
        spaActive = false;
        this.spa = false;
        this.spa2 = 0;
        }

        if (gym.storeActive === 1) {
        storeActive = true;
        this.store = true;
        this.store2 = 1;

       } else {
        storeActive = false;
        this.store = false;
        this.store2 = 0;

       }
        openingDate = gym.openingDate;
        businessHours = gym.businessHours;
        maxCapacity = gym.maxCapacity;
        phoneNumber = gym.phoneNumber;
        adminID = gym.adminID;
        }
       
  
  
  
       
  
      this.gymForm = new FormGroup({
        name: new FormControl(name, Validators.required),
        spaActive: new FormControl(this.spa2),
        storeActive: new FormControl(this.store2),
        openingDate: new FormControl(openingDate, Validators.required),
        businessHours: new FormControl(businessHours),
        maxCapacity: new FormControl(maxCapacity, Validators.required),
        phoneNumber: new FormControl(phoneNumber, Validators.required),
        adminID: new FormControl(adminID, Validators.required)
      });
    }
}
