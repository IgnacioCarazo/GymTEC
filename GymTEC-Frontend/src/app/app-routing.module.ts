import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-view/admin-login/admin-login.component';
import { ClientLoginComponent } from './client-view/client-login/client-login.component';
import { RegistrationComponent } from './client-view/registration/registration.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/client/login', pathMatch: 'full' },


// client paths
{ path: 'client/login', component: ClientLoginComponent },
{ path: 'client/register', component: RegistrationComponent },



// admin paths
{ path: 'admin/login', component: AdminLoginComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
