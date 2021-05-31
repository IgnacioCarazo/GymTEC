import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  
    isAdmin!: boolean;
    loading = false;
    submitted = false;
    returnUrl!: string;
    email!: string;
    password!: string;

  constructor() { }
  

  ngOnInit(): void {
  }


  onSubmit(loginForm: NgForm) {  
    console.log(loginForm.value);
    loginForm.reset();
  }

}
