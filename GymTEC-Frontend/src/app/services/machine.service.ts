import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Machine } from "../models/machine.model";

@Injectable()
export class MachineService {

    private machines: Machine[] = [];
    machinesChanged = new Subject<Machine[]>();
  
    constructor() {
  
      this.machines = [new Machine("Machine 1"), new Machine("Machine 2"), new Machine("Machine 3"), new Machine("Machine 4")];
    }
  
    /**
    * @name getMachines()
    * @returns The array of machines of this service.  
    */
     getMachines() {
      return this.machines.slice();
    }
  
     /**
    * @name getMachine()
    * @description It searches a machine by its index
    * @returns {Machine} A machine 
    */
      getMachine(index: number) {
        return this.machines[index];
      }
  
       /**
    * @name deleteMachine()
    * @argument {number} index
    * @description deletes a machine by its index from this service devices array.
    */
      deleteMachine(index: number) {
      this.machines.splice(index, 1);
      this.machinesChanged.next(this.machines.slice());
    }
  
     /**
    * @name addMachine()
    * @argument {Machine} machine
    * @description  Adds a machine to this service array of devices
    */
      addMachine(machine: Machine) {
        this.machines.push(machine);
        this.machinesChanged.next(this.machines.slice());
      }
   
    /**
    * @name updateMachine()
    * @argument {number} index
    * @argument {Machine} newMachine
    * @description  It updates the value of a machine type of this service devices array. 
    */
     updateMachine(index: number, newMachine: Machine) {
      this.machines[index] = newMachine;
      this.machinesChanged.next(this.machines.slice());
    }

    
  }