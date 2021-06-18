import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

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

  constructor(private adminService : AdminService, private router : Router) { }
  

  ngOnInit(): void {
  }


  onSubmit(loginForm: NgForm) {  
    this.router.navigate(['/admin/gestion-sucursales']);

    this.adminService.login = true;
    console.log(loginForm.value);
    loginForm.reset();
  }

}
