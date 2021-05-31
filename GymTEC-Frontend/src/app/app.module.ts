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
import { ClasesComponent } from './client-view/clases/clases.component';
import { GestionSucursalesComponent } from './admin-view/gestion-sucursales/gestion-sucursales.component';
import { GestionTratamientosSpaComponent } from './admin-view/gestion-tratamientos-spa/gestion-tratamientos-spa.component';
import { GestionPuestosComponent } from './admin-view/gestion-puestos/gestion-puestos.component';
import { GestionTipoPlanillaComponent } from './admin-view/gestion-tipo-planilla/gestion-tipo-planilla.component';
import { GestionEmpleadosComponent } from './admin-view/gestion-empleados/gestion-empleados.component';
import { GestionServiciosComponent } from './admin-view/gestion-servicios/gestion-servicios.component';
import { GestionTipoEquipoComponent } from './admin-view/gestion-tipo-equipo/gestion-tipo-equipo.component';
import { GestionInventarioComponent } from './admin-view/gestion-inventario/gestion-inventario.component';
import { GestionProductosComponent } from './admin-view/gestion-productos/gestion-productos.component';
import { ConfiguracionGimnasioComponent } from './admin-view/configuracion-gimnasio/configuracion-gimnasio.component';
import { GeneracionPlanillaComponent } from './admin-view/generacion-planilla/generacion-planilla.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientLoginComponent,
    RegistrationComponent,
    DropdownDirective,
    AdminLoginComponent,
    ClasesComponent,
    GestionSucursalesComponent,
    GestionTratamientosSpaComponent,
    GestionPuestosComponent,
    GestionTipoPlanillaComponent,
    GestionEmpleadosComponent,
    GestionServiciosComponent,
    GestionTipoEquipoComponent,
    GestionInventarioComponent,
    GestionProductosComponent,
    ConfiguracionGimnasioComponent,
    GeneracionPlanillaComponent
    
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
