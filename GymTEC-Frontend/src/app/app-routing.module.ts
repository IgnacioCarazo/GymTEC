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

const routes: Routes = [ 
  { path: '', redirectTo: '/client/login', pathMatch: 'full' },


// client paths
{ path: 'client/login', component: ClientLoginComponent },
{ path: 'client/register', component: RegistrationComponent },
{ path: 'client/clases', component: ClasesComponent },
{ path: 'client/registro-clases', component: RegistroClasesComponent },





// admin paths
{ path: 'admin/login', component: AdminLoginComponent },
// generacion de planilla
{ path: 'admin/generacion-planilla', component: GeneracionSpreadsheetComponent },

//sucursales
{ path: 'admin/gestion-sucursales', component: GestionGymComponent ,
children: [
 {
   path: 'new',
   component: GymEditComponent,
 },{
 path: ':id',
 component: GymDetailComponent,
},{
 path: ':id/edit',
 component: GymEditComponent,
},
]},
//tratamiento spa
{ path: 'admin/gestion-tratamientos-spa', component: GestionTratamientosComponent ,
children: [
 {
   path: 'new',
   component: TratamientosEditComponent,
 },{
 path: ':id',
 component: TratamientosDetailComponent,
},{
 path: ':id/edit',
 component: TratamientosEditComponent,
},
]},
//puestos de trabajo
{ path: 'admin/gestion-puestos', component: GestionJobComponent ,
children: [
 {
   path: 'new',
   component: JobEditComponent,
 },{
 path: ':id',
 component: JobDetailComponent,
},{
 path: ':id/edit',
 component: JobEditComponent,
},
]},
// tipo de planilla
{ path: 'admin/gestion-tipo-planilla', component: GestionSpreadsheetTypeComponent ,
children: [
 {
   path: 'new',
   component: SpreadsheetTypeEditComponent,
 },{
 path: ':id',
 component: SpreadsheetTypeDetailComponent,
},{
 path: ':id/edit',
 component: SpreadsheetTypeEditComponent,
},
]},
// gestion de empleados
{ path: 'admin/gestion-empleados', component: GestionEmployeeComponent ,
children: [
 {
   path: 'new',
   component: EmployeeEditComponent,
 },{
 path: ':id',
 component: EmployeeDetailComponent,
},{
 path: ':id/edit',
 component: EmployeeEditComponent,
},
]},
// gestion de servicios
{ path: 'admin/gestion-servicios', component: GestionServiceComponent ,
children: [
 {
   path: 'new',
   component: ServiceEditComponent,
 },{
 path: ':id',
 component: ServiceDetailComponent,
},{
 path: ':id/edit',
 component: ServiceEditComponent,
},
]},
// gestion de tipo de maquinas
{ path: 'admin/gestion-tipo-maquinas', component: GestionMachineTypeComponent ,
children: [
 {
   path: 'new',
   component: MachineTypeEditComponent,
 },{
 path: ':id',
 component: MachineTypeDetailComponent,
},{
 path: ':id/edit',
 component: MachineTypeEditComponent,
},
]},
// gestion de maquinas
{ path: 'admin/gestion-maquinas', component: GestionMachineComponent ,
children: [
 {
   path: 'new',
   component: MachineEditComponent,
 },{
 path: ':id',
 component: MachineDetailComponent,
},{
 path: ':id/edit',
 component: MachineEditComponent,
},
]},
// gestion de productos
{ path: 'admin/gestion-productos', component: GestionProductComponent ,
children: [
 {
   path: 'new',
   component: ProductEditComponent,
 },{
 path: ':id',
 component: ProductDetailComponent,
},{
 path: ':id/edit',
 component: ProductEditComponent,
},
]},
// asociacion tratamientos
{ path: 'admin/asociacion-tratamientos', component: AsociacionTratamientosComponent ,
children: [
 {
   path: 'new',
   component: GymEditComponent,
 },{
 path: ':id',
 component: GymDetailComponent,
},{
 path: ':id/edit',
 component: GymEditComponent,
},
]},
//asociacion de inventario 
{ path: 'admin/asociacion-inventario', component: AsociacionInventarioComponent ,
children: [
 {
   path: 'new',
   component: GymEditComponent,
 },{
 path: ':id',
 component: GymDetailComponent,
},{
 path: ':id/edit',
 component: GymEditComponent,
},
]},
//asociacion de productos 
{ path: 'admin/asociacion-productos', component: AsociacionProductsComponent ,
children: [
 {
   path: 'new',
   component: GymEditComponent,
 },{
 path: ':id',
 component: GymDetailComponent,
},{
 path: ':id/edit',
 component: GymEditComponent,
},
]},
//crear clase
{ path: 'admin/crear-clase', component: CrearClaseComponent ,
children: [
 {
   path: 'new',
   component: CClaseEditComponent,
 },{
 path: ':id',
 component: CClaseDetailComponent,
},{
 path: ':id/edit',
 component: CClaseEditComponent,
},
]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
