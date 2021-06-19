import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
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
      this.classService.updateClass(this.id, this.form.value);
    } else {
      this.classService.addClass(this.form.value);
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
        // gym class attributes
    
      let date = '';
      let startTime = '';
      let finnishTime = '';
      let capacity = 0;
      let isGrupal = false;
      let instructorID = 0;
      let classType = '';
      let classTypeID = 'string';
      
      if (this.editMode) {
        const gymClass = this.classService.getClass(this.id);
        date = gymClass.date;
        startTime = gymClass.startTime;
        finnishTime = gymClass.finnishTime;
        capacity = gymClass.capacity;
        isGrupal = gymClass.isGrupal;
        instructorID = gymClass.instructorID;
        classType = gymClass.classType;
        classTypeID = gymClass.classTypeID;
        }
    
  
      this.form = new FormGroup({
        date: new FormControl(date, Validators.required),
        startTime: new FormControl(startTime, Validators.required),
        finnishTime: new FormControl(finnishTime, Validators.required),
        capacity: new FormControl(capacity, Validators.required),
        isGrupal: new FormControl(isGrupal, Validators.required),
        instructorID: new FormControl(instructorID, Validators.required),
        classType: new FormControl(classType, Validators.required),
        classTypeID: new FormControl(classTypeID, Validators.required),
      });
    }
}
