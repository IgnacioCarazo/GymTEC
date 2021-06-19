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
import { GestionGymComponent } from './admin-view/gestion-gym/gestion-gym.component';
import { GymDetailComponent } from './admin-view/gestion-gym/gym-detail/gym-detail.component';
import { GymListComponent } from './admin-view/gestion-gym/gym-list/gym-list.component';
import { GymItemComponent } from './admin-view/gestion-gym/gym-list/gym-item/gym-item.component';
import { GymEditComponent } from './admin-view/gestion-gym/gym-edit/gym-edit.component';
import { GymService } from './services/gym.service';
import { GestionTratamientosComponent } from './admin-view/gestion-tratamientos/gestion-tratamientos.component';
import { TratamientosDetailComponent } from './admin-view/gestion-tratamientos/tratamientos-detail/tratamientos-detail.component';
import { TratamientosListComponent } from './admin-view/gestion-tratamientos/tratamientos-list/tratamientos-list.component';
import { TratamientosItemComponent } from './admin-view/gestion-tratamientos/tratamientos-list/tratamientos-item/tratamientos-item.component';
import { TratamientosEditComponent } from './admin-view/gestion-tratamientos/tratamientos-edit/tratamientos-edit.component';
import { TreatmentService } from './services/treatment.service';
import { GestionJobComponent } from './admin-view/gestion-job/gestion-job.component';
import { JobDetailComponent } from './admin-view/gestion-job/job-detail/job-detail.component';
import { JobEditComponent } from './admin-view/gestion-job/job-edit/job-edit.component';
import { JobListComponent } from './admin-view/gestion-job/job-list/job-list.component';
import { JobItemComponent } from './admin-view/gestion-job/job-list/job-item/job-item.component';
import { JobService } from './services/job.service';
import { GestionSpreadsheetTypeComponent } from './admin-view/gestion-spreadsheet-type/gestion-spreadsheet-type.component';
import { SpreadsheetTypeDetailComponent } from './admin-view/gestion-spreadsheet-type/spreadsheet-type-detail/spreadsheet-type-detail.component';
import { SpreadsheetTypeEditComponent } from './admin-view/gestion-spreadsheet-type/spreadsheet-type-edit/spreadsheet-type-edit.component';
import { SpreadsheetTypeListComponent } from './admin-view/gestion-spreadsheet-type/spreadsheet-type-list/spreadsheet-type-list.component';
import { SpreadsheetTypeItemComponent } from './admin-view/gestion-spreadsheet-type/spreadsheet-type-list/spreadsheet-type-item/spreadsheet-type-item.component';
import { SpreadsheetService } from './services/spreadsheed-type.service';
import { GestionEmployeeComponent } from './admin-view/gestion-employee/gestion-employee.component';
import { EmployeeDetailComponent } from './admin-view/gestion-employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './admin-view/gestion-employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './admin-view/gestion-employee/employee-list/employee-list.component';
import { EmployeeItemComponent } from './admin-view/gestion-employee/employee-list/employee-item/employee-item.component';
import { EmployeeService } from './services/employee.service';
import { GestionServiceComponent } from './admin-view/gestion-service/gestion-service.component';
import { ServiceListComponent } from './admin-view/gestion-service/service-list/service-list.component';
import { ServiceDetailComponent } from './admin-view/gestion-service/service-detail/service-detail.component';
import { ServiceItemComponent } from './admin-view/gestion-service/service-list/service-item/service-item.component';
import { ServiceEditComponent } from './admin-view/gestion-service/service-edit/service-edit.component';
import { ServiceService } from './services/service.service';
import { GestionMachineTypeComponent } from './admin-view/gestion-machine-type/gestion-machine-type.component';
import { MachineTypeDetailComponent } from './admin-view/gestion-machine-type/machine-type-detail/machine-type-detail.component';
import { MachineTypeEditComponent } from './admin-view/gestion-machine-type/machine-type-edit/machine-type-edit.component';
import { MachineTypeListComponent } from './admin-view/gestion-machine-type/machine-type-list/machine-type-list.component';
import { MachineTypeItemComponent } from './admin-view/gestion-machine-type/machine-type-list/machine-type-item/machine-type-item.component';
import { MachineTypeService } from './services/machine-type.service';
import { GestionMachineComponent } from './admin-view/gestion-machine/gestion-machine.component';
import { MachineDetailComponent } from './admin-view/gestion-machine/machine-detail/machine-detail.component';
import { MachineEditComponent } from './admin-view/gestion-machine/machine-edit/machine-edit.component';
import { MachineListComponent } from './admin-view/gestion-machine/machine-list/machine-list.component';
import { MachineItemComponent } from './admin-view/gestion-machine/machine-list/machine-item/machine-item.component';
import { MachineService } from './services/machine.service';
import { GestionProductComponent } from './admin-view/gestion-product/gestion-product.component';
import { ProductEditComponent } from './admin-view/gestion-product/product-edit/product-edit.component';
import { ProductDetailComponent } from './admin-view/gestion-product/product-detail/product-detail.component';
import { ProductListComponent } from './admin-view/gestion-product/product-list/product-list.component';
import { ProductItemComponent } from './admin-view/gestion-product/product-list/product-item/product-item.component';
import { ProductService } from './services/product.service';
import { AsociacionTratamientosComponent } from './admin-view/asociacion-tratamientos/asociacion-tratamientos.component';
import { AsociacionProductsComponent } from './admin-view/asociacion-products/asociacion-products.component';
import { AsociacionInventarioComponent } from './admin-view/asociacion-inventario/asociacion-inventario.component';
import { CrearClaseComponent } from './admin-view/crear-clase/crear-clase.component';
import { GeneracionSpreadsheetComponent } from './admin-view/generacion-spreadsheet/generacion-spreadsheet.component';
import { CClaseEditComponent } from './admin-view/crear-clase/c-clase-edit/c-clase-edit.component';
import { CClaseDetailComponent } from './admin-view/crear-clase/c-clase-detail/c-clase-detail.component';
import { CClaseListComponent } from './admin-view/crear-clase/c-clase-list/c-clase-list.component';
import { CClaseItemComponent } from './admin-view/crear-clase/cClase-list/c-clase-item/c-clase-item.component';
import { GymClassService } from './services/gymclass.service';
import { RegistroClasesComponent } from './client-view/registro-clases/registro-clases.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientLoginComponent,
    RegistrationComponent,
    DropdownDirective,
    AdminLoginComponent,
    ClasesComponent,
    GestionGymComponent,
    GymDetailComponent,
    GymListComponent,
    GymItemComponent,
    GymEditComponent,
    GestionTratamientosComponent,
    TratamientosDetailComponent,
    TratamientosListComponent,
    TratamientosItemComponent,
    TratamientosEditComponent,
    GestionJobComponent,
    JobDetailComponent,
    JobEditComponent,
    JobListComponent,
    JobItemComponent,
    GestionSpreadsheetTypeComponent,
    SpreadsheetTypeDetailComponent,
    SpreadsheetTypeEditComponent,
    SpreadsheetTypeListComponent,
    SpreadsheetTypeItemComponent,
    GestionEmployeeComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    GestionServiceComponent,
    ServiceListComponent,
    ServiceDetailComponent,
    ServiceItemComponent,
    ServiceEditComponent,
    GestionMachineTypeComponent,
    MachineTypeDetailComponent,
    MachineTypeEditComponent,
    MachineTypeListComponent,
    MachineTypeItemComponent,
    GestionMachineComponent,
    MachineDetailComponent,
    MachineEditComponent,
    MachineListComponent,
    MachineItemComponent,
    GestionProductComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductListComponent,
    ProductItemComponent,
    AsociacionTratamientosComponent,
    AsociacionProductsComponent,
    AsociacionInventarioComponent,
    CrearClaseComponent,
    GeneracionSpreadsheetComponent,
    CClaseEditComponent,
    CClaseDetailComponent,
    CClaseListComponent,
    CClaseItemComponent,
    RegistroClasesComponent,
    
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
  providers: [ClientService,AdminService,GymService,TreatmentService, JobService, SpreadsheetService, EmployeeService,
              ServiceService, MachineTypeService, MachineService, ProductService, GymClassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
