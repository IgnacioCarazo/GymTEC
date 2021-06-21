import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { AdminService } from 'src/app/services/admin.service';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { Md5 } from 'ts-md5';

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
    employee!: Employee

  constructor(private adminService : AdminService, private router : Router,
    private dataStorageService : DataStorageService) { }
  

  ngOnInit(): void {
  }


  onSubmit(loginForm: NgForm) {  
    loginForm.value.password = Md5.hashStr(loginForm.value.password);
    this.dataStorageService.sendLoginInfoEmployee(loginForm.value.email,loginForm.value.password).
            subscribe( employee => {
                this.employee = employee;
                if (this.employee.role === "Administrador") {
                  console.log(loginForm.value);
                  this.adminService.login = true; 
                  this.router.navigate(['/admin/gestion-sucursales']);
                }     
            });
    loginForm.reset();
  }

}
