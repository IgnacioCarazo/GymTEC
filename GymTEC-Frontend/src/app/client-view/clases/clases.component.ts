import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  form!: FormGroup;
  


  constructor(private router : Router) { }

  ngOnInit(): void {
    this.initForm();

  }


  onSubmit() {      
    this.router.navigate(['/client/registro-clases']);

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
    let gym = '';

    this.form = new FormGroup({
      gymClass: new FormControl(gymClass),
      gym: new FormControl(gym),
    });
  }

  

}
