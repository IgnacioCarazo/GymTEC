import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MachineType } from "../models/machine-type.model";
import { Machine } from "../models/machine.model";

@Injectable()
export class MachineTypeService {

    private machineTypes: MachineType[] = [];
    machineTypesChangerd = new Subject<MachineType[]>();
  
    constructor() {
  
      this.machineTypes = [new MachineType("Cinta de correr"), new MachineType("Bicicleta Estacionaria"), new MachineType("Mancuernas"), new MachineType("Remos")];
    }
  
    /**
    * @name getMachineTypes()
    * @returns The array of services of this service.  
    */
     getMachineTypes() {
      return this.machineTypes.slice();
    }
  
     /**
    * @name getMachineType()
    * @description It searches a macine type by its index
    * @returns {MachineType} A machine type
    */
      getMachineType(index: number) {
        return this.machineTypes[index];
      }
  
       /**
    * @name deleteMachineType()
    * @argument {number} index
    * @description deletes a machine type by its index from this service devices array.
    */
      deleteMachineType(index: number) {
      this.machineTypes.splice(index, 1);
      this.machineTypesChangerd.next(this.machineTypes.slice());
    }
  
     /**
    * @name addMachineType()
    * @argument {MachineType} machineType 
    * @description  Adds a machineType to this service array of devices
    */
      addMachineType(machineType: MachineType) {
        this.machineTypes.push(machineType);
        this.machineTypesChangerd.next(this.machineTypes.slice());
      }
   
    /**
    * @name updateMachineTypes()
    * @argument {number} index
    * @argument {MachineType} newMachineType
    * @description  It updates the value of a machine type of this service devices array. 
    */
     updateMachineType(index: number, newMachineType: MachineType) {
      this.machineTypes[index] = newMachineType;
      this.machineTypesChangerd.next(this.machineTypes.slice());
    }

    
  }