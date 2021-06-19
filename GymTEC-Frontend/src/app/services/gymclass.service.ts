import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { GymClass } from "../models/gymclass.model";

@Injectable()
export class GymClassService {
  
  private classes: GymClass[] = [];
  classesChanged = new Subject<GymClass[]>();

  constructor() {

    this.classes = []
  }

  /**
  * @name getClasses()
  * @returns The array of classes of this service.  
  */
   getClasses() {
    return this.classes.slice();
  }

   /**
  * @name getClass()
  * @description It searches a class by its index
  * @returns {GymClass} A class
  */
    getClass(index: number) {
      return this.classes[index];
    }

     /**
  * @name deleteClass()
  * @argument {number} index
  * @description deletes a class by its index from this service devices array.
  */
    deleteClass(index: number) {
    this.classes.splice(index, 1);
    this.classesChanged.next(this.classes.slice());
  }

   /**
  * @name addCLass()
  * @argument {Class} class
  * @description  Adds a device to this service array of devices
  */
    addClass (gymClass: GymClass) {
      this.classes.push(gymClass);
      this.classesChanged.next(this.classes.slice());
    }
   
 
  /**
  * @name updateClass()
  * @argument {number} index
  * @argument {Class} newClass
  * @description  It updates the value of a device of this service devices array. 
  */
   updateClass(index: number, newClass: GymClass) {
    this.classes[index] = newClass;
    this.classesChanged.next(this.classes.slice());
  }
}