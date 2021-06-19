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
  * @name setTreatments()
  * @argument {Treatment[]} treatments
  * @description  It set this service gyms with the value of the gyms argument.
  */
    setTreatments(treatments: Treatment[]) {
      this.treatments = treatments;
      this.treatmentsChanged.next(this.treatments.slice());
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


   /**
    * @name getGymTreatments()
    * @returns The array of treatments registered to the gym. 
    * @description If switch = 0 returns treatments_aux (machines belongin to the gym), if switch = 1
    * returns machines without a gym 
    */
    getGymTreatments(gymName: string, switchX: number) {
      let treatments_aux: Treatment[] = [];
      let treatments_aux_2: Treatment[] = [];
      for (let treatment of this.treatments) {
        if (treatment.gymName === gymName) {
          treatments_aux.push(treatment)
        } if (treatment.gymName === "") {
          treatments_aux_2.push(treatment)
        }
      }
      if (switchX === 1) {
          return treatments_aux_2
      } else {
          return treatments_aux
      }
    }



      /**
    * @name getTreatmentByID()
    * @description It searches a treatment by its id
    * @returns {Treatment} A treatment 
    */
       getTreatmentByID(id: number): any {
        for (let treatment of this.treatments) {
            if (treatment.id === id) {
              return treatment;
            } 
          }
      }

  /**
* @name getTreatmentIndexByID()
* @description It searches a machine by its index
* @returns {Product} A product 
*/
getTreatmentIndexByID(id: number): any {
    let cont = 0;
    for (let treatment of this.treatments) {
        if (treatment.id === id) {
          return cont;
         } else {
          cont += 1;
      }
    }
   }
  }