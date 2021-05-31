import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientLoginComponent } from './client-view/client-login/client-login.component';
import { RegistrationComponent } from './client-view/registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { AdminService } from './services/admin.service';
import { ClientService } from './services/client.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { AdminLoginComponent } from './admin-view/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientLoginComponent,
    RegistrationComponent,
    DropdownDirective,
    AdminLoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
 
    
    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule],
  providers: [ClientService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
