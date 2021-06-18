import { Component, NgModule, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css'],
  exportAs: 'ngForm'
})

export class ClientLoginComponent implements OnInit {

    isAdmin!: boolean;
    loginForm!: FormGroup;
    loading = false;
    submitted = false;
    returnUrl!: string;
    email!: string;
    password!: string;
    client!: Client;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private clientService: ClientService
    ) {
    }

    ngOnInit() {
    }

    

    onSubmit(loginForm: NgForm) {  
      this.clientService.login = true;
      console.log(loginForm.value);
      loginForm.reset();
    }

}
