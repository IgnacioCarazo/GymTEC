import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Gym } from '../models/gym.model';
import { DataStorageService } from './data-storage.service';
import { GymService } from './gym.service';


@Injectable({ providedIn: 'root' })
export class GymResolverService implements Resolve<Gym[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private gymService: GymService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const gyms = this.gymService.getGyms();

    if (gyms.length === 0) {
      return this.dataStorageService.fetchGyms();
    } else {
      return gyms;
    }
  }
}
