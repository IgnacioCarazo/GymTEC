import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro-clases',
  templateUrl: './registro-clases.component.html',
  styleUrls: ['./registro-clases.component.css']
})
export class RegistroClasesComponent implements OnInit {

  form!: FormGroup;
  


  constructor() { }

  ngOnInit(): void {
    this.initForm();

  }


  onSubmit() {      
    console.log(this.form.value);
    this.form.reset();
  }
  


  /**
  * @name initForm()
  * @description If its edit mode it will load the inputs of the form with the preexistent values of the recipe. Otherwise
  * it will just set thes values 'empty' for the user to fill.
  */
   private initForm() {
    let gymClass = '';

    this.form = new FormGroup({
      gymClass: new FormControl(gymClass),
    });
  }

  

}
