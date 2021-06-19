import { Component, NgModule, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { Md5 } from 'ts-md5';

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
        private clientService: ClientService,
        private dataStorageService: DataStorageService
    ) {
    }

    ngOnInit() {
    }

    

    onSubmit(loginForm: NgForm) {  
    loginForm.value.password = Md5.hashStr(loginForm.value.password);

    this.dataStorageService.sendLoginInfoClient(loginForm.value.email,loginForm.value.password).
            subscribe( client => {
                this.client = client;
                if (this.client.dni !== 0) {
                  this.clientService.setClient(this.client);
                  this.clientService.login = true; 
                  this.router.navigate(['/client/clases']);


                }  
            });

      this.clientService.login = true;
      console.log(loginForm.value);
      loginForm.reset();
    }

}
