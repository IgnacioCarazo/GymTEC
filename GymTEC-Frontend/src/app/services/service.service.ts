import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Service } from "../models/service.model";

@Injectable()
export class ServiceService {

    private services: Service[] = [];
    servicesChanged = new Subject<Service[]>();
  
    constructor() {
  
      this.services = [];
    }

     /**
  * @name setServices()
  * @argument {Service[]} services
  * @description  It set this service jobs with the value of the jobs argument.
  */
      setServices(services: Service[]) {
        this.services = services;
        this.servicesChanged.next(this.services.slice());
      }  
  
    /**
    * @name getServices()
    * @returns The array of services of this service.  
    */
     getServices() {
      return this.services.slice();
    }
  
     /**
    * @name getService()
    * @description It searches a job by its index
    * @returns {Service} A service
    */
      getService(index: number) {
        return this.services[index];
      }
  
       /**
    * @name deleteService()
    * @argument {number} index
    * @description deletes a job by its index from this service devices array.
    */
      deleteService(index: number) {
      this.services.splice(index, 1);
      this.servicesChanged.next(this.services.slice());
    }
  
     /**
    * @name addService()
    * @argument {Service} treatment
    * @description  Adds a service to this service array of devices
    */
      addService(service: Service) {
        this.services.push(service);
        this.servicesChanged.next(this.services.slice());
      }
   
    /**
    * @name updateService()
    * @argument {number} index
    * @argument {Service} newService
    * @description  It updates the value of a service of this service devices array. 
    */
     updateService(index: number, newService: Service) {
      this.services[index] = newService;
      this.servicesChanged.next(this.services.slice());
    }

    
  }