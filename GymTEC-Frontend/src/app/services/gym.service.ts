import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Client } from "../models/client.model";
import { Gym } from "../models/gym.model";

@Injectable()
export class GymService {
  
  aT!: boolean;
  aI!: boolean;
  aP!: boolean;
  cC!: boolean;
  xX!: boolean; 
  list!: boolean;
  
  login = false;
  client!: Client;
  private gyms: Gym[] = [];
  gymsChanged = new Subject<Gym[]>();

  constructor() {

    this.gyms = []
  }

   /**
  * @name setGyms()
  * @argument {Gym[]} gyms
  * @description  It set this service gyms with the value of the gyms argument.
  */
    setGyms(gyms: Gym[]) {
      this.gyms = gyms;
      this.gymsChanged.next(this.gyms.slice());
    }

  /**
  * @name getGyms()
  * @returns The array of gyms of this service.  
  */
   getGyms() {
    return this.gyms.slice();
  }

   /**
  * @name getGym()
  * @description It searches a gym by its index
  * @returns {Gym} A gym
  */
    getGym(index: number) {
      return this.gyms[index];
    }

     /**
  * @name deleteGym()
  * @argument {number} index
  * @description deletes a gym by its index from this service devices array.
  */
  deleteGym(index: number) {
    this.gyms.splice(index, 1);
    this.gymsChanged.next(this.gyms.slice());
  }

   /**
  * @name addGym()
  * @argument {Gym} gym
  * @description  Adds a device to this service array of devices
  */
  addGym(gym: Gym) {
      this.gyms.push(gym);
      this.gymsChanged.next(this.gyms.slice());
    }
 
  /**
  * @name updateGym()
  * @argument {number} index
  * @argument {Gym} newGym
  * @description  It updates the value of a device of this service devices array. 
  */
   updateGym(index: number, newGym: Gym) {
    this.gyms[index] = newGym;
    this.gymsChanged.next(this.gyms.slice());
  }
}