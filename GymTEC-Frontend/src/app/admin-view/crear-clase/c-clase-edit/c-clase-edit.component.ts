import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { GymClassService } from 'src/app/services/gymclass.service';

@Component({
  selector: 'app-c-clase-edit',
  templateUrl: './c-clase-edit.component.html',
  styleUrls: ['./c-clase-edit.component.css']
})
export class CClaseEditComponent implements OnInit {

  id!: number;
  editMode = false;
  form!: FormGroup;
  
  constructor(private route: ActivatedRoute,
              private classService: GymClassService,
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
    if (this.form.value.isGrupal) {
      this.form.value.isGrupal = 1;
    } else {
      this.form.value.isGrupal = 0;
    }

    if (this.editMode) {
      this.classService.updateClass(this.id, this.form.value);
      this.dataStorageService.updateGymClass(this.form.value);
    } else {
      this.classService.addClass(this.form.value);
      this.dataStorageService.storeGymClass(this.form.value);
    }
    console.log(this.form.value);

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
        // gym class attributes
    
      let date = '';
      let startTime = '';
      let finnishTime = '';
      let capacity = 0;
      let isGrupal = 0;
      let instructorID = 0;
      let className = '';
      let serviceID = '';
      let gymName = '';
      
      if (this.editMode) {
        const gymClass = this.classService.getClass(this.id);
        date = gymClass.date;
        startTime = gymClass.startTime;
        finnishTime = gymClass.finnishTime;
        capacity = gymClass.capacity;
        isGrupal = gymClass.isGrupal;
        instructorID = gymClass.instructorID;
        className = gymClass.className;
        serviceID = gymClass.serviceID;
        gymName = gymClass.gymName;
        }
    
  
      this.form = new FormGroup({
        date: new FormControl(date, Validators.required),
        startTime: new FormControl(startTime, Validators.required),
        finnishTime: new FormControl(finnishTime, Validators.required),
        capacity: new FormControl(capacity, Validators.required),
        isGrupal: new FormControl(isGrupal, Validators.required),
        instructorID: new FormControl(instructorID, Validators.required),
        className: new FormControl(className, Validators.required),
        serviceID: new FormControl(serviceID, Validators.required),
        registered: new FormControl(0),
        gymName: new FormControl(gymName, Validators.required),
      });
    }
}
