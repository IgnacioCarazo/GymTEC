import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Gym } from '../models/gym.model';
import { GymClass } from '../models/gymclass.model';
import { DataStorageService } from './data-storage.service';
import { GymService } from './gym.service';
import { GymClassService } from './gymclass.service';


@Injectable({ providedIn: 'root' })
export class GymClassResolverService implements Resolve<GymClass[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private gymClassService: GymClassService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const gymClasses = this.gymClassService.getClasses();

    if (gymClasses.length === 0) {
      return this.dataStorageService.fetchGymClasses();
    } else {
      return gymClasses;
    }
  }
}
