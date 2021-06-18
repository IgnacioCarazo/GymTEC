import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Treatment } from "../models/treatment.model";

@Injectable()
export class TreatmentService {

    private treatments: Treatment[] = [];
    treatmentsChanged = new Subject<Treatment[]>();
  
    constructor() {
  
      this.treatments = [new Treatment("Masaje relajante"), new Treatment("Masaje muscular"), new Treatment("Manicure")];
    }
  
    /**
    * @name getTreatments()
    * @returns The array of treatments of this service.  
    */
     getTreatments() {
      return this.treatments.slice();
    }
  
     /**
    * @name getTreatment()
    * @description It searches a treatment by its index
    * @returns {Treatment} A treatment
    */
      getTreatment(index: number) {
        return this.treatments[index];
      }
  
       /**
    * @name deleteTreatment()
    * @argument {number} index
    * @description deletes a treatment by its index from this service devices array.
    */
    deleteTreatment(index: number) {
      this.treatments.splice(index, 1);
      this.treatmentsChanged.next(this.treatments.slice());
    }
  
     /**
    * @name addTreatment()
    * @argument {Treatment} treatment
    * @description  Adds a treatment to this service array of devices
    */
      addTreatment(treatment: Treatment) {
        this.treatments.push(treatment);
        this.treatmentsChanged.next(this.treatments.slice());
      }
   
    /**
    * @name updateTreatment()
    * @argument {number} index
    * @argument {Treatment} newTreatment
    * @description  It updates the value of a treatment of this service devices array. 
    */
     updateTreatment(index: number, newTreatment: Treatment) {
      this.treatments[index] = newTreatment;
      this.treatmentsChanged.next(this.treatments.slice());
    }

    
  }