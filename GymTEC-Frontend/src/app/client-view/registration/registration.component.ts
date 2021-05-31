import { Component, NgModule, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  birthDate!: any;
  clientForm!: FormGroup;
  client!: Client;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

   

  onSubmit() {      
    console.log(this.clientForm.value);
    
    this.router.navigate(['/client/login']);

    this.clientForm.reset();
  }

  /**
  * @name initForm()
  * @description If its edit mode it will load the inputs of the form with the preexistent values of the recipe. Otherwise
  * it will just set thes values 'empty' for the user to fill.
  */
   private initForm() {
    let name = '';
    let primaryLastName = '';
    let secondaryLastName = '';
    let email = '';
    let password = '';
    let dni = '';
    let age = 0;
    let weight = 0;
    let imc = 0;
    let birthDate = '';
    let address = '';

    this.clientForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      primaryLastName: new FormControl(primaryLastName,Validators.required),
      secondaryLastName: new FormControl(secondaryLastName,Validators.required),
      email: new FormControl(email,Validators.required),
      password: new FormControl(password, Validators.required),
      dni: new FormControl(dni, Validators.required),
      age: new FormControl(age, Validators.required),
      weight: new FormControl(weight, Validators.required),
      imc: new FormControl(imc, Validators.required),
      birthDate: new FormControl(birthDate, Validators.required),
      address: new FormControl(address, Validators.required),
      
      
    });
  }
  

}