import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../models/client.model";
import { Employee } from "../models/employee.model";
import { Gym } from "../models/gym.model";
import { AdminService } from "./admin.service";
import { ClientService } from "./client.service";
import { EmployeeService } from "./employee.service";
import { GymService } from "./gym.service";
import { GymClassService } from "./gymclass.service";
import { JobService } from "./job.service";
import { MachineTypeService } from "./machine-type.service";
import { MachineService } from "./machine.service";
import { ProductService } from "./product.service";
import { ServiceService } from "./service.service";
import { SpreadsheetService } from "./spreadsheed-type.service";
import { TreatmentService } from "./treatment.service";
import { map, tap } from 'rxjs/operators';
import { GymClass } from "../models/gymclass.model";
import { Job } from "../models/job.model";
import { MachineType } from "../models/machine-type.model";
import { Machine } from "../models/machine.model";
import { Product } from "../models/product.model";
import { Service } from "../models/service.model";
import { SpreadsheetType } from "../models/spreadsheet-type.model";
import { Treatment } from "../models/treatment.model";
import { GenerateWorksheet } from "../models/generatedSS.model";


@Injectable({ providedIn: 'root' })
export class DataStorageService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    constructor(private http: HttpClient,
                private clientService: ClientService,
                private gymService: GymService,
                private machineService: MachineService,
                private machineTypeService: MachineTypeService,
                private productService: ProductService,
                private treatmentService: TreatmentService,
                private jobService: JobService,
                private serviceService: ServiceService,
                private employeeService: EmployeeService,
                private adminService: AdminService,
                private gymClassService: GymClassService,
                private spreadsheetTypeService: SpreadsheetService
                ) {

    }

/**
   * ------------------------------------------------
  * http request del login/register
  * ------------------------------------------------
  */

  /**
  * @name sendLoginInfoClient()
  * @argument {string} email
  * @argument {string} password
  * @description  It sends an http get request to the backend wiht the info of the client's email and password. 
  * @returns {Observable<Client>} A client observable.
  */
   sendLoginInfoClient(email: string, password: string): Observable<Client> {
    return this.http.get<Client>('https://localhost:5001/api/Client/login/'+ email + '/' + password);    
  }


  /**
  * @name sendLoginInfoAdmin()
  * @argument {string} email
  * @argument {string} password
  * @description  It sends an http get request to the backend wiht the info of the admin's email and password.
  * @returns {Observable<Admin>} An admin observable.
  */
   sendLoginInfoEmployee(email: string, password: string) {
      console.log(email, password);
      return this.http.get<Employee>('https://localhost:5001/api/Employee/login/'+ email + '/' + password);  
  }

  /**
  * @name sendRegisterInfo()
  * @description  It sends an http get request to the backend wiht the info of the client's registration.
  */
   sendRegisterInfo(client: Client) {
    this.http
    .post(
      'https://localhost:5001/api/Client',
      client, this.httpOptions
    )
    .subscribe((response: any) => {
      console.log(response);
    });  
} 

/**
   * ------------------------------------------------
  * http request de sucursal
  * ------------------------------------------------
  */

  /**
  * @name updateGym()
  * @description It updates a gym
  */
   updateGym(gym: Gym) {
    this.http
      .put(
        'https://localhost:5001/api/Gym',
        gym
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchGyms();
  }

  /**
  * @name deleteGym()
  * @argument {Gym} gym
  * @description deletes a gym
  */
   deleteGym(gym: Gym) {
    this.http.delete<Gym>('https://localhost:5001/api/Gym/' + gym.name, this.httpOptions).subscribe();
    this.fetchGyms();
  }

  /**
  * @name storeGym()
  * @argument {Gym} gym
  * @description It sends an http post request with a device as argument to store the respective device 
  * in the database.
  */
  storeGym(gym: Gym) {
    this.http
      .post(
        'https://localhost:5001/api/Gym',
        gym, this.httpOptions
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchGyms();

  }

  /**
  * @name fetchGyms()
  * @returns An observable array of devices  
  */
  fetchGyms() {
    return this.http
      .get<Gym[]>(
        'https://localhost:5001/api/Gym'
      )
      .pipe(
        map((gyms: Gym[]) => {
          return gyms.map(gym => {
            return {
              ...gym
            };
          });
        }),
        tap(gyms => {
          this.gymService.setGyms(gyms);
        })
      )
  }

 

  
/**
   * ------------------------------------------------
  * http request de empleado
  * ------------------------------------------------
  */

  /**
  * @name updateEmployee()
  * @description It updates a employee
  */
   updateEmployee(employee: Employee) {
    this.http
      .put(
        'https://localhost:5001/api/Employee',
        employee
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchEmployees();
  }

  /**
  * @name delteEMployee()
  * @argument {Employee} employee
  * @description deletes a gym
  */
   deleteEmployee(employee: Employee) {
    this.http.delete<Employee>('https://localhost:5001/api/Employee/' + employee.id, this.httpOptions).subscribe();
    this.fetchEmployees();
  }

  /**
  * @name storeEmployee()
  * @argument {Employee} employee
  * @description It sends an http post request with a employee as argument to store the respective employee 
  * in the database.
  */
   storeEmployee(employee: Employee) {
    this.http
      .post(
        'https://localhost:5001/api/Employee',
        employee, this.httpOptions
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchEmployees();

  }

  /**
  * @name fetchEmployees()
  * @returns An observable array of devices  
  */
   fetchEmployees() {
    return this.http
      .get<Employee[]>(
        'https://localhost:5001/api/Employee'
      )
      .pipe(
        map((employees: Employee[]) => {
          return employees.map(employee => {
            return {
              ...employee
            };
          });
        }),
        tap(employees => {
          this.employeeService.setEmployees(employees);
        })
      )
  }


/**
   * ------------------------------------------------
  * http request de clase
  * ------------------------------------------------
  */

  /**
  * @name updateGymClass()
  * @description It updates a employee
  */
   updateGymClass(gymClass: GymClass) {
    this.http
      .put(
        'https://localhost:5001/api/GymClass',
        gymClass
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchGymClasses();
  }

  /**
  * @name deleteGymClass()
  * @argument {GymClass} gymClass
  * @description deletes a gym
  */
   deleteGymClass(gymClass: GymClass) {
    this.http.delete<GymClass>('https://localhost:5001/api/GymClass/' + gymClass.className, this.httpOptions).subscribe();
    this.fetchGymClasses();
  }

  /**
  * @name storeGymClass()
  * @argument {GymClass} gymClass
  * @description It sends an http post request with a gymClass as argument to store the respective gymClass 
  * in the database.
  */
   storeGymClass(gymClass: GymClass) {
    this.http
      .post(
        'https://localhost:5001/api/GymClass',
        gymClass, this.httpOptions
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchGymClasses();

  }

  /**
  * @name fetchGymClasses()
  * @returns An observable array of devices  
  */
   fetchGymClasses() {
    return this.http
      .get<GymClass[]>(
        'https://localhost:5001/api/GymClass'
      )
      .pipe(
        map((gymClasses: GymClass[]) => {
          return gymClasses.map(gymClass => {
            return {
              ...gymClass
            };
          });
        }),
        tap(gymClass => {
          this.gymClassService.setClasess(gymClass);
        })
      )
  }


/**
   * ------------------------------------------------
  * http request de puesto de trabajo
  * ------------------------------------------------
  */

  /**
  * @name updateJob()
  * @description It updates a job
  */
   updateJob(job: Job) {
    this.http
      .put(
        'https://localhost:5001/api/Job',
        job
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchJobs();
  }

  /**
  * @name deleteJob()
  * @argument {Job} job
  * @description deletes a gym
  */
   deleteJob(job: Job) {
    this.http.delete<GymClass>('https://localhost:5001/api/Job/' + job.id, this.httpOptions).subscribe();
    this.fetchJobs();
  }

  /**
  * @name storeJob()
  * @argument {Job} job
  * @description It sends an http post request with a job as argument to store the respective job 
  * in the database.
  */
   storeJob(job: Job) {
    this.http
      .post(
        'https://localhost:5001/api/Job',
        job, this.httpOptions
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchJobs();

  }

  /**
  * @name fetchJobs()
  * @returns An observable array of devices  
  */
   fetchJobs() {
    return this.http
      .get<Job[]>(
        'https://localhost:5001/api/Job'
      )
      .pipe(
        map((jobs: Job[]) => {
          return jobs.map(job => {
            return {
              ...job
            };
          });
        }),
        tap(job => {
          this.jobService.setJobs(job);
        })
      )
  }


/**
   * ------------------------------------------------
  * http request de machine type
  * ------------------------------------------------
  */

  /**
  * @name updateMachineType()
  * @description It updates a job
  */
   updateMachineType(machineType: MachineType) {
    this.http
      .put(
        'https://localhost:5001/api/MachineType',
        machineType
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchMachineTypes();
  }

  /**
  * @name deleteMachineTypes()
  * @argument {MachineType} machineType
  * @description deletes a gym
  */
   deleteMachineTypes(machineType: MachineType) {
    this.http.delete<MachineType>('https://localhost:5001/api/MachineType/' + machineType.id, this.httpOptions).subscribe();
    this.fetchMachineTypes();
  }

  /**
  * @name storeMachineType()
  * @argument {MachineType} machineType
  * @description It sends an http post request with a machineType as argument to store the respective machineType 
  * in the database.
  */
   storeMachineType(machineType: MachineType) {
    this.http
      .post(
        'https://localhost:5001/api/MachineType',
        machineType, this.httpOptions
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchMachineTypes();

  }

  /**
  * @name fetchMachineTypes()
  * @returns An observable array of devices  
  */
   fetchMachineTypes() {
    return this.http
      .get<MachineType[]>(
        'https://localhost:5001/api/MachineType'
      )
      .pipe(
        map((machineTypes: MachineType[]) => {
          return machineTypes.map(machineType => {
            return {
              ...machineType
            };
          });
        }),
        tap(machineType => {
          this.machineTypeService.setMachineTypes(machineType);
        })
      )
  }


/**
   * ------------------------------------------------
  * http request de machine 
  * ------------------------------------------------
  */

  /**
  * @name updateMachine()
  * @description It updates a machine
  */
   updateMachine(machine: Machine) {
    this.http
      .put(
        'https://localhost:5001/api/Machine',
        machine
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchMachines();
  }

  /**
  * @name deleteMachine()
  * @argument {Machine} machine
  * @description deletes a gym
  */
   deleteMachine(machine: Machine) {
    this.http.delete<Machine>('https://localhost:5001/api/Machine/' + machine.serialNumber, this.httpOptions).subscribe();
    this.fetchMachineTypes();
  }

  /**
  * @name storeMachine()
  * @argument {Machine} machine
  * @description It sends an http post request with a machine as argument to store the respective machine 
  * in the database.
  */
   storeMachine(machine: Machine) {
    this.http
      .post(
        'https://localhost:5001/api/Machine',
        machine, this.httpOptions
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchMachines();

  }

  /**
  * @name fetchMachines()
  * @returns An observable array of devices  
  */
   fetchMachines() {
    return this.http
      .get<Machine[]>(
        'https://localhost:5001/api/Machine'
      )
      .pipe(
        map((machines: Machine[]) => {
          return machines.map(machine => {
            return {
              ...machine
            };
          });
        }),
        tap(machine => {
          this.machineService.setMachines(machine);
        })
      )
  }



/**
   * ------------------------------------------------
  * http request de product 
  * ------------------------------------------------
  */

  /**
  * @name updateProduct()
  * @description It updates a product
  */
   updateProduct(product: Product) {
    this.http
      .put(
        'https://localhost:5001/api/Product',
        product
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchProducts();
  }

  /**
  * @name deleteProduct()
  * @argument {Product} machine
  * @description deletes a gym
  */
   deleteProduct(product:Product) {
    this.http.delete<Product>('https://localhost:5001/api/Product/' + product.barCode, this.httpOptions).subscribe();
    this.fetchProducts();
  }

  /**
  * @name storeProduct()
  * @argument {Product} product
  * @description It sends an http post request with a product as argument to store the respective product 
  * in the database.
  */
   storeProduct(product: Product) {
    this.http
      .post(
        'https://localhost:5001/api/Product',
        product, this.httpOptions
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchProducts();

  }

  /**
  * @name fetchProducts()
  * @returns An observable array of devices  
  */
   fetchProducts() {
    return this.http
      .get<Product[]>(
        'https://localhost:5001/api/Product'
      )
      .pipe(
        map((products: Product[]) => {
          return products.map(product => {
            return {
              ...product
            };
          });
        }),
        tap(product => {
          this.productService.setProducts(product);
        })
      )
  }



/**
   * ------------------------------------------------
  * http request de service 
  * ------------------------------------------------
  */

  /**
  * @name updateService()
  * @description It updates a service
  */
   updateService(service: Service) {
    this.http
      .put(
        'https://localhost:5001/api/Service',
        service
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchServices();
  }

  /**
  * @name deleteService()
  * @argument {Service} service
  * @description deletes a gym
  */
   deleteService(service:Service) {
    this.http.delete<Service>('https://localhost:5001/api/Service/' + service.id, this.httpOptions).subscribe();
    this.fetchServices();
  }

  /**
  * @name storeService()
  * @argument {Service} service
  * @description It sends an http post request with a service as argument to store the respective service 
  * in the database.
  */
   storeService(service: Service) {
    this.http
      .post(
        'https://localhost:5001/api/Service',
        service, this.httpOptions
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchServices();

  }

  /**
  * @name fetchServices()
  * @returns An observable array of devices  
  */
   fetchServices() {
    return this.http
      .get<Service[]>(
        'https://localhost:5001/api/Service'
      )
      .pipe(
        map((services: Service[]) => {
          return services.map(service => {
            return {
              ...service
            };
          });
        }),
        tap(service => {
          this.serviceService.setServices(service);
        })
      )
  }


/**
   * ------------------------------------------------
  * http request de spreadsheet 
  * ------------------------------------------------
  */

  /**
  * @name updateSpreadsheetType()
  * @description It updates a spreadsheetType
  */
   updateSpreadsheetType(spreadsheetType: SpreadsheetType) {
    this.http
      .put(
        'https://localhost:5001/api/SpreadsheetType',
        spreadsheetType
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchSpreadsheetTypes();
  }

  /**
  * @name deleteSpreadsheetType()
  * @argument {SpreadsheetType} spreadsheetType
  * @description deletes a gym
  */
   deleteSpreadsheetType(spreadsheetType:SpreadsheetType) {
    this.http.delete<SpreadsheetType>('https://localhost:5001/api/SpreadsheetType/' + spreadsheetType.id, this.httpOptions).subscribe();
    this.fetchSpreadsheetTypes();
  }

  /**
  * @name storeSpreadsheetTypes()
  * @argument {SpreadsheetTypes} spreadsheetType
  * @description It sends an http post request with a service as argument to store the respective service 
  * in the database.
  */
   storeSpreadsheetTypes(spreadsheetType: SpreadsheetType) {
    this.http
      .post(
        'https://localhost:5001/api/SpreadsheetType',
        spreadsheetType, this.httpOptions
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchSpreadsheetTypes();

  }

  /**
  * @name fetchSpreadsheetTypes()
  * @returns An observable array of devices  
  */
   fetchSpreadsheetTypes() {
    return this.http
      .get<SpreadsheetType[]>(
        'https://localhost:5001/api/SpreadsheetType'
      )
      .pipe(
        map((spreadsheetTypes: SpreadsheetType[]) => {
          return spreadsheetTypes.map(spreadsheetType => {
            return {
              ...spreadsheetType
            };
          });
        }),
        tap(spreadsheetType => {
          this.spreadsheetTypeService.setSpreadsheets(spreadsheetType);
        })
      )
  }


  /**
   * ------------------------------------------------
  * http request de treatment 
  * ------------------------------------------------
  */

  /**
  * @name updateTreatment()
  * @description It updates a treatment
  */
   updateTreatment(treatment: Treatment) {
    this.http
      .put(
        'https://localhost:5001/api/Treatment',
        treatment
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchTreatments();
  }

  /**
  * @name deleteTreatments()
  * @argument {Treatment} treatment
  * @description deletes a gym
  */
   deleteTreatments(treatment:Treatment) {
    this.http.delete<Treatment>('https://localhost:5001/api/Treatment/' + treatment.id, this.httpOptions).subscribe();
    this.fetchTreatments();
  }

  /**
  * @name storeTreatments()
  * @argument {Treatment} treatment
  * @description It sends an http post request with a service as argument to store the respective service 
  * in the database.
  */
   storeTreatments(treatment: Treatment) {
    this.http
      .post(
        'https://localhost:5001/api/Treatment',
        treatment, this.httpOptions
      )
      .subscribe(response => {
        console.log(response);
      });
      this.fetchTreatments();

  }

  /**
  * @name fetchTreatments()
  * @returns An observable array of devices  
  */
   fetchTreatments() {
    return this.http
      .get<Treatment[]>(
        'https://localhost:5001/api/Treatment'
      )
      .pipe(
        map((treatments: Treatment[]) => {
          return treatments.map(treatment => {
            return {
              ...treatment
            };
          });
        }),
        tap(treatment => {
          this.treatmentService.setTreatments(treatment);
        })
      )
  }
  
  /**
   * ------------------------------------------------
  * http request de asociacion de tratamientos 
  * ------------------------------------------------
  */

  
 /**
   * ------------------------------------------------
  * http request de asociacion de inventario 
  * ------------------------------------------------
  */


 /**
   * ------------------------------------------------
  * http request de asociacion de productos 
  * ------------------------------------------------
  */


 /**
   * ------------------------------------------------
  * http request de generacion de planilla 
  * ------------------------------------------------
  */


 /**
  * @name fetchPlanilla()
  * @returns An observable array of devices  
  */
  fetchPlanilla() {
    return this.http
      .get<GenerateWorksheet[]>(
        'https://localhost:5001/api/GenerateWorksheet'
      )
      .pipe(
        map((worksheets: GenerateWorksheet[]) => {
          return worksheets.map(worksheet => {
            return {
              ...worksheet
            };
          });
        }),
        tap(worksheets => {
          this.spreadsheetTypeService.spreadsheetGenerated = worksheets;
        })
      )
  }
}