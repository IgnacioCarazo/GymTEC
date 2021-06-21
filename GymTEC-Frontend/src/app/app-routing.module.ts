import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-view/admin-login/admin-login.component';
import { AsociacionInventarioComponent } from './admin-view/asociacion-inventario/asociacion-inventario.component';
import { AsociacionProductsComponent } from './admin-view/asociacion-products/asociacion-products.component';
import { AsociacionTratamientosComponent } from './admin-view/asociacion-tratamientos/asociacion-tratamientos.component';
import { CClaseDetailComponent } from './admin-view/crear-clase/c-clase-detail/c-clase-detail.component';
import { CClaseEditComponent } from './admin-view/crear-clase/c-clase-edit/c-clase-edit.component';
import { CrearClaseComponent } from './admin-view/crear-clase/crear-clase.component';
import { GeneracionSpreadsheetComponent } from './admin-view/generacion-spreadsheet/generacion-spreadsheet.component';
import { EmployeeDetailComponent } from './admin-view/gestion-employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './admin-view/gestion-employee/employee-edit/employee-edit.component';
import { GestionEmployeeComponent } from './admin-view/gestion-employee/gestion-employee.component';
import { GestionGymComponent } from './admin-view/gestion-gym/gestion-gym.component';
import { GymDetailComponent } from './admin-view/gestion-gym/gym-detail/gym-detail.component';
import { GymEditComponent } from './admin-view/gestion-gym/gym-edit/gym-edit.component';
import { GestionJobComponent } from './admin-view/gestion-job/gestion-job.component';
import { JobDetailComponent } from './admin-view/gestion-job/job-detail/job-detail.component';
import { JobEditComponent } from './admin-view/gestion-job/job-edit/job-edit.component';
import { GestionMachineTypeComponent } from './admin-view/gestion-machine-type/gestion-machine-type.component';
import { MachineTypeDetailComponent } from './admin-view/gestion-machine-type/machine-type-detail/machine-type-detail.component';
import { MachineTypeEditComponent } from './admin-view/gestion-machine-type/machine-type-edit/machine-type-edit.component';
import { GestionMachineComponent } from './admin-view/gestion-machine/gestion-machine.component';
import { MachineDetailComponent } from './admin-view/gestion-machine/machine-detail/machine-detail.component';
import { MachineEditComponent } from './admin-view/gestion-machine/machine-edit/machine-edit.component';
import { GestionProductComponent } from './admin-view/gestion-product/gestion-product.component';
import { ProductDetailComponent } from './admin-view/gestion-product/product-detail/product-detail.component';
import { ProductEditComponent } from './admin-view/gestion-product/product-edit/product-edit.component';
import { GestionServiceComponent } from './admin-view/gestion-service/gestion-service.component';
import { ServiceDetailComponent } from './admin-view/gestion-service/service-detail/service-detail.component';
import { ServiceEditComponent } from './admin-view/gestion-service/service-edit/service-edit.component';
import { GestionSpreadsheetTypeComponent } from './admin-view/gestion-spreadsheet-type/gestion-spreadsheet-type.component';
import { SpreadsheetTypeDetailComponent } from './admin-view/gestion-spreadsheet-type/spreadsheet-type-detail/spreadsheet-type-detail.component';
import { SpreadsheetTypeEditComponent } from './admin-view/gestion-spreadsheet-type/spreadsheet-type-edit/spreadsheet-type-edit.component';
import { GestionTratamientosComponent } from './admin-view/gestion-tratamientos/gestion-tratamientos.component';
import { TratamientosDetailComponent } from './admin-view/gestion-tratamientos/tratamientos-detail/tratamientos-detail.component';
import { TratamientosEditComponent } from './admin-view/gestion-tratamientos/tratamientos-edit/tratamientos-edit.component';
import { ClasesComponent } from './client-view/clases/clases.component';
import { ClientLoginComponent } from './client-view/client-login/client-login.component';
import { RegistrationComponent } from './client-view/registration/registration.component';
import { RegistroClasesComponent } from './client-view/registro-clases/registro-clases.component';
import { GymClass } from './models/gymclass.model';
import { EmployeeResolverService } from './services/employee-resolver.service';
import { GymResolverService } from './services/gym-resolver.service';
import { GymClassResolverService } from './services/gymclass-resolver.service';
import { JobResolverService } from './services/job-resolver.service';
import { MachineResolverService } from './services/machine-resolver.service';
import { MachineTypeResolverService } from './services/machine-type-resolver.service';
import { ProductResolverService } from './services/product-resolver.service';
import { ServiceResolverService } from './services/service-resolver.service';
import { SpreadsheetTypeResolverService } from './services/spreadsheet-type.service';
import { TreatmentResolverService } from './services/treatment-resolver.service';

const routes: Routes = [ 
  { path: '', redirectTo: '/client/login', pathMatch: 'full' },


// client paths
{ path: 'client/login', component: ClientLoginComponent },
{ path: 'client/register', component: RegistrationComponent },
{ path: 'client/clases', component: ClasesComponent ,
resolve: [GymClassResolverService]},
{ path: 'client/registro-clases', component: RegistroClasesComponent },





// admin paths
{ path: 'admin/login', component: AdminLoginComponent },
// generacion de planilla
{ path: 'admin/generacion-planilla', component: GeneracionSpreadsheetComponent,
resolve: [SpreadsheetTypeResolverService]},

//sucursales
{ path: 'admin/gestion-sucursales', component: GestionGymComponent,
resolve: [GymResolverService, EmployeeResolverService] ,
children: [
 {
   path: 'new',
   component: GymEditComponent,
   resolve: [GymResolverService, EmployeeResolverService]
 },{
 path: ':id',
 component: GymDetailComponent,
 resolve: [GymResolverService, EmployeeResolverService]
},{
 path: ':id/edit',
 component: GymEditComponent,
 resolve: [GymResolverService, EmployeeResolverService]
},
]},
//tratamiento spa
{ path: 'admin/gestion-tratamientos-spa', component: GestionTratamientosComponent ,
resolve: [TreatmentResolverService],
children: [
 {
   path: 'new',
   component: TratamientosEditComponent,
   resolve: [TreatmentResolverService],
 },{
 path: ':id',
 component: TratamientosDetailComponent,
 resolve: [TreatmentResolverService],
},{
 path: ':id/edit',
 component: TratamientosEditComponent,
 resolve: [TreatmentResolverService],
},
]},
//puestos de trabajo
{ path: 'admin/gestion-puestos', component: GestionJobComponent,
resolve: [JobResolverService] ,
children: [
 {
   path: 'new',
   component: JobEditComponent,
   resolve: [JobResolverService]
 },{
 path: ':id',
 component: JobDetailComponent,
 resolve: [JobResolverService]
},{
 path: ':id/edit',
 component: JobEditComponent,
 resolve: [JobResolverService]
},
]},
// tipo de planilla
{ path: 'admin/gestion-tipo-planilla', component: GestionSpreadsheetTypeComponent ,
resolve: [SpreadsheetTypeResolverService],
children: [
 {
   path: 'new',
   component: SpreadsheetTypeEditComponent,
   resolve: [SpreadsheetTypeResolverService]
 },{
 path: ':id',
 component: SpreadsheetTypeDetailComponent,
 resolve: [SpreadsheetTypeResolverService]
},{
 path: ':id/edit',
 component: SpreadsheetTypeEditComponent,
 resolve: [SpreadsheetTypeResolverService]
},
]},
// gestion de empleados
{ path: 'admin/gestion-empleados', component: GestionEmployeeComponent ,
resolve: [EmployeeResolverService, JobResolverService, GymResolverService, SpreadsheetTypeResolverService],
children: [
 {
   path: 'new',
   component: EmployeeEditComponent,
   resolve: [EmployeeResolverService, JobResolverService, GymResolverService, SpreadsheetTypeResolverService]
 },{
 path: ':id',
 component: EmployeeDetailComponent,
 resolve: [EmployeeResolverService, JobResolverService, GymResolverService, SpreadsheetTypeResolverService]
},{
 path: ':id/edit',
 component: EmployeeEditComponent,
 resolve: [EmployeeResolverService, JobResolverService, GymResolverService, SpreadsheetTypeResolverService]
},
]},
// gestion de servicios
{ path: 'admin/gestion-servicios', component: GestionServiceComponent ,
resolve: [ServiceResolverService],
children: [
 {
   path: 'new',
   component: ServiceEditComponent,
   resolve: [ServiceResolverService]
 },{
 path: ':id',
 component: ServiceDetailComponent,
 resolve: [ServiceResolverService]
},{
 path: ':id/edit',
 component: ServiceEditComponent,
 resolve: [ServiceResolverService]
},
]},
// gestion de tipo de maquinas
{ path: 'admin/gestion-tipo-maquinas', component: GestionMachineTypeComponent ,
resolve: [MachineTypeResolverService],
children: [
 {
   path: 'new',
   component: MachineTypeEditComponent,
   resolve: [MachineTypeResolverService]
 },{
 path: ':id',
 component: MachineTypeDetailComponent,
 resolve: [MachineTypeResolverService]
},{
 path: ':id/edit',
 component: MachineTypeEditComponent,
 resolve: [MachineTypeResolverService]
},
]},
// gestion de maquinas
{ path: 'admin/gestion-maquinas', component: GestionMachineComponent ,
resolve: [MachineTypeResolverService, MachineResolverService],
children: [
 {
   path: 'new',
   component: MachineEditComponent,
   resolve: [MachineTypeResolverService, MachineResolverService]
 },{
 path: ':id',
 component: MachineDetailComponent,
 resolve: [MachineTypeResolverService, MachineResolverService]
},{
 path: ':id/edit',
 component: MachineEditComponent,
 resolve: [MachineTypeResolverService, MachineResolverService]
},
]},
// gestion de productos
{ path: 'admin/gestion-productos', component: GestionProductComponent ,
resolve: [ProductResolverService],
children: [
 {
   path: 'new',
   component: ProductEditComponent,
   resolve: [ProductResolverService]
 },{
 path: ':id',
 component: ProductDetailComponent,
 resolve: [ProductResolverService]
},{
 path: ':id/edit',
 component: ProductEditComponent,
 resolve: [ProductResolverService]
},
]},
// asociacion tratamientos
{ path: 'admin/asociacion-tratamientos', component: AsociacionTratamientosComponent ,
resolve: [GymResolverService, TreatmentResolverService],
children: [
 {
   path: 'new',
   component: GymEditComponent,
   resolve: [GymResolverService, TreatmentResolverService]
 },{
 path: ':id',
 component: GymDetailComponent,
 resolve: [GymResolverService, TreatmentResolverService]
},{
 path: ':id/edit',
 component: GymEditComponent,
 resolve: [GymResolverService, TreatmentResolverService]
},
]},
//asociacion de inventario 
{ path: 'admin/asociacion-inventario', component: AsociacionInventarioComponent ,
resolve: [MachineResolverService, MachineTypeResolverService, GymResolverService],
children: [
 {
   path: 'new',
   component: GymEditComponent,
   resolve: [MachineResolverService, MachineTypeResolverService, GymResolverService]
 },{
 path: ':id',
 component: GymDetailComponent,
 resolve: [MachineResolverService, MachineTypeResolverService, GymResolverService]
},{
 path: ':id/edit',
 component: GymEditComponent,
 resolve: [MachineResolverService, MachineTypeResolverService, GymResolverService]
},
]},
//asociacion de productos 
{ path: 'admin/asociacion-productos', component: AsociacionProductsComponent ,
resolve: [ProductResolverService, GymResolverService],
children: [
 {
   path: 'new',
   component: GymEditComponent,
   resolve: [ProductResolverService, GymResolverService]
 },{
 path: ':id',
 component: GymDetailComponent,
 resolve: [ProductResolverService, GymResolverService]
},{
 path: ':id/edit',
 component: GymEditComponent,
 resolve: [ProductResolverService, GymResolverService]
},
]},
//crear clase
{ path: 'admin/crear-clase', component: CrearClaseComponent ,
resolve: [GymClassResolverService, GymResolverService, EmployeeResolverService],
children: [
 {
   path: 'new',
   component: CClaseEditComponent,
   resolve: [GymClassResolverService, GymResolverService, EmployeeResolverService]
 },{
 path: ':id',
 component: CClaseDetailComponent,
 resolve: [GymClassResolverService, GymResolverService, EmployeeResolverService]
},{
 path: ':id/edit',
 component: CClaseEditComponent,
 resolve: [GymClassResolverService, GymResolverService, EmployeeResolverService]
},
]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
