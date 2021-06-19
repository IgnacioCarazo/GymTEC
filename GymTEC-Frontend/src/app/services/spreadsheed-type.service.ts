import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Job } from "../models/job.model";
import { SpreadsheetType } from "../models/spreadsheet-type.model";

@Injectable()
export class SpreadsheetService {

    private spreadsheetTypes: SpreadsheetType[] = [];
    spreadsheetTypesChanged = new Subject<SpreadsheetType[]>();
  
    constructor() {
  
      this.spreadsheetTypes = [new SpreadsheetType("Pago mensual"), new SpreadsheetType("Pago por clase"), new SpreadsheetType("Pago por hora")];
    }

   /**
  * @name setSpreadsheets()
  * @argument {SpreadsheetType[]} spreadsheetTypes
  * @description  It set this service gyms with the value of the gyms argument.
  */
    setSpreadsheets(spreadsheetTypes: SpreadsheetType[]) {
      this.spreadsheetTypes = spreadsheetTypes;
      this.spreadsheetTypesChanged.next(this.spreadsheetTypes.slice());
    }
  
    /**
    * @name getspreadsheetTypes()
    * @returns The array of jobs of this service.  
    */
     getspreadsheetTypes() {
      return this.spreadsheetTypes.slice();
    }
  
     /**
    * @name getspreadsheetType()
    * @description It searches a spreadsheetType by its index
    * @returns {SpreadsheetType} A spreadsheetType
    */
      getspreadsheetType(index: number) {
        return this.spreadsheetTypes[index];
      }
  
       /**
    * @name deleteSpreadsheetType()
    * @argument {number} index
    * @description deletes a spreadsheetType by its index from this service devices array.
    */
    deleteSpreadsheetType(index: number) {
      this.spreadsheetTypes.splice(index, 1);
      this.spreadsheetTypesChanged.next(this.spreadsheetTypes.slice());
    }
  
     /**
    * @name addSpreadsheetTypes()
    * @argument {Jobs} treatment
    * @description  Adds a job to this service array of devices
    */
      addSpreadsheetType(spreadsheetType: SpreadsheetType) {
        this.spreadsheetTypes.push(spreadsheetType);
        this.spreadsheetTypesChanged.next(this.spreadsheetTypes.slice());
      }
   
    /**
    * @name updateSpreadsheetTypes()
    * @argument {number} index
    * @argument {SpreadsheetType} newJob
    * @description  It updates the value of a spreadsheetType of this service devices array. 
    */
     updateSpreadsheetType(index: number, newSpreadsheetType: SpreadsheetType) {
      this.spreadsheetTypes[index] = newSpreadsheetType;
      this.spreadsheetTypesChanged.next(this.spreadsheetTypes.slice());
    }

    
  }