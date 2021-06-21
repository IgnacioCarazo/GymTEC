import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Gym } from 'src/app/models/gym.model';
import { Machine } from 'src/app/models/machine.model';
import { Product } from 'src/app/models/product.model';
import { Service } from 'src/app/models/service.model';
import { Treatment } from 'src/app/models/treatment.model';
import { GymService } from 'src/app/services/gym.service';
import { MachineService } from 'src/app/services/machine.service';
import { ProductService } from 'src/app/services/product.service';
import { ServiceService } from 'src/app/services/service.service';
import { TreatmentService } from 'src/app/services/treatment.service';
import { of } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-gym-detail',
  templateUrl: './gym-detail.component.html',
  styleUrls: ['./gym-detail.component.css']
})
export class GymDetailComponent implements OnInit {

  formP!: FormGroup;
  formI!: FormGroup;
  formT!: FormGroup;
  formC!: FormGroup;

  treatments!: Treatment[];
  products!: Product[];
  machines!: Machine[];
  services!: Service[];
  treatment!: Treatment;
  product!: Product;
  machine!: Machine;
  service!: Service;
  flag!: boolean;

  gymMachines!: Machine[];
  gymProducts!: Product[];
  gymTreatments!: Treatment[];
  gymServices!: Service[];

  gym!: Gym;
  id!: number;

  constructor(public gymService: GymService,
    private treatmentService: TreatmentService,
    private productService: ProductService,
    private machineService: MachineService,
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dataStorageService: DataStorageService) { 

      this.formI = this.formBuilder.group({
        machines: ['']
      });
      this.formP = this.formBuilder.group({
        products: ['']
      });
      this.formC = this.formBuilder.group({
        classes: ['']
      });
      this.formT = this.formBuilder.group({
        treatments: ['']
      });
      this.services = this.serviceService.getServices();
      this.products = this.productService.getProducts();
      this.treatments = this.treatmentService.getTreatments();
      this.machines = this.machineService.getMachines();

      if (gymService.aI) {
        of(this.machineService.getMachines()).subscribe(machines => {
          this.machines = machines;
          this.formI.controls.machines.patchValue(this.machines[0].serialNumber);
        });
      }
      if (gymService.aP) {
        of(this.productService.getProducts()).subscribe(products => {
          this.products = products;
          this.formP.controls.products.patchValue(this.products[0].barCode);
        });
      }
      if (gymService.aT) {
        of(this.treatmentService.getTreatments()).subscribe(treatments => {
          this.treatments = treatments;
          this.formT.controls.treatments.patchValue(this.treatments[0].id);
        });
        
      }
      if (gymService.cC) {
        of(this.treatmentService.getTreatments()).subscribe(treatments => {
          this.treatments = treatments;
          this.formC.controls.treatments.patchValue(this.treatments[0].name);
        });
      }
      
    }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.gym = this.gymService.getGym(this.id);
          this.services = this.serviceService.getServices();
          this.products = this.productService.getProducts();
          this.treatments = this.treatmentService.getTreatments();
          this.machines = this.machineService.getMachines();
          this.gymTreatments = [];
          this.getGymInfo();
          this.dataStorageService.fetchMachines(); 
          this.dataStorageService.fetchProducts(); 
          this.dataStorageService.fetchTreatments(); 
          this.dataStorageService.fetchGyms(); 
          

          
        }
      );
  }

  onSubmit() {
    if (this.gymService.aI) {
      this.machine = this.machineService.getMachineBySN(parseInt(this.formI.value.machines));
      this.machine.gymName = this.gym.name;
      this.machineService.updateMachine(this.machineService.getMachineIndexBySN(parseInt(this.formI.value.machines)),this.machine);
      console.log(this.machine);
      this.dataStorageService.updateMachine(this.machine); 
      this.dataStorageService.fetchMachines(); 
    }
    if (this.gymService.aP) {
      this.product = this.productService.getProductBySN(this.formP.value.products);
      this.product.gymName = this.gym.name;
      this.productService.updateProduct(this.productService.getProductIndexBySN(this.formP.value.products),this.product); 
      console.log(this.product);
      this.dataStorageService.updateProduct(this.product);  
      this.dataStorageService.fetchProducts(); 

    }
    if (this.gymService.aT) {
      this.treatment = this.treatmentService.getTreatmentByID(parseInt(this.formT.value.treatments));
      this.treatment.gymName = this.gym.name;
      this.treatmentService.updateTreatment(this.treatmentService.getTreatmentIndexByID(parseInt(this.formT.value.treatments)),this.treatment); 
      console.log(this.treatment);
      this.dataStorageService.updateTreatment(this.treatment);  
      this.dataStorageService.fetchTreatments(); 

    }
  }

  checkTreatment (treatment : Treatment) {

  }
  /**
  * @name onEditGym()
  * @description Sets the link to 'edit'. 
  */
   onEditGym() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  
  /**
  * @name onDeleteGym()
  * @description Deletes the current device and sets the link back to '/devices'.
  */
   onDeleteGym() {
    this.dataStorageService.deleteGym(this.gym);
    this.gymService.deleteGym(this.id);
  }

  

  getGymInfo() {
    if (this.gymService.aT) {
      this.gymTreatments = this.treatmentService.getGymTreatments(this.gymService.getGym(this.id).name, 0);
      this.treatments = this.treatmentService.getGymTreatments(this.gymService.getGym(this.id).name, 1);
      }
    if (this.gymService.aI) {
      this.gymMachines = this.machineService.getGymMachines(this.gymService.getGym(this.id).name, 0);
      this.machines = this.machineService.getGymMachines(this.gymService.getGym(this.id).name, 1);
    }
   if (this.gymService.aP) {    
      this.gymProducts = this.productService.getGymProducts(this.gymService.getGym(this.id).name, 0);
      this.products = this.productService.getGymProducts(this.gymService.getGym(this.id).name, 1);
    }
    if (this.gymService.cC) {
      this.gymMachines = this.machineService.getGymMachines(this.gymService.getGym(this.id).name, 0);
      this.machines = this.machineService.getGymMachines(this.gymService.getGym(this.id).name, 1);
    }
    

  }
  

}
