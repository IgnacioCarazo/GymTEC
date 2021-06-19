import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  form!: FormGroup;
  form2!: FormGroup;
  


  constructor() { }

  ngOnInit(): void {
    this.initForm();
    //this.initForm2();

  }


  onSubmit() {      
    console.log(this.form.value);
    console.log(this.form2.value);

    this.form.reset();
  }

  /**
  * @name initForm()
  * @description If its edit mode it will load the inputs of the form with the preexistent values of the recipe. Otherwise
  * it will just set thes values 'empty' for the user to fill.
  */
   private initForm() {
    let gymClass = '';
    let gym = '';

    this.form = new FormGroup({
      gymClass: new FormControl(gymClass),
      gym: new FormControl(gym),
    });
  }

  /**
  * @name initForm2()
  * @description If its edit mode it will load the inputs of the form with the preexistent values of the recipe. Otherwise
  * it will just set thes values 'empty' for the user to fill.
  */
   private initForm2() {
    let gymClassID = 0;

    this.form = new FormGroup({
      gymClassID: new FormControl(gymClassID),
    });
  }

}
