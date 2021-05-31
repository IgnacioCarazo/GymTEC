import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAdmin = false;
  email!: string;
  password!: string;

  constructor(private router: Router,
              public clientService: ClientService,
              private adminService: AdminService) { }

  ngOnInit(): void {
  }

  /**
    * @name changeView()
    * @description When the user changes the page's view with the respective button this method is called and changes 
    * the value of this.isAdmin' which is true when in Admin View and false when in Chef View.
    */
   changeView() {
    if (this.isAdmin) {
        this.router.navigate(['/client/login']);
    } else {
        this.router.navigate(['/admin/login']);
    }
    this.isAdmin = !this.isAdmin;
}

/**
    * @name logout() 
    * @description If the user is logged in any view and logs out with the respective button to do so this method will 
    * be called. It changes the valie of 'login' to false which indicates there's no one logged in and changes the
    * web link to '/login'.
    */
 logout() { 
  if (this.isAdmin) {
      this.router.navigate(['/admin/login']);
  } else {
      this.router.navigate(['/client/login']);
  }
}

 /**
    * @name onSubmit() 
    * @argument {NgForm} form - A form argument which is filled with the user's email and password
    * @description When the button to login is clicked this method is called and it sets the actual user in the page which
    * is returned by the backend. 
    */
  onSubmit(form: NgForm) {
    this.email = form.value.email;
    this.password = form.value.password;        
    
    form.reset();

    

  }

}
