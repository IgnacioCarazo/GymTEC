import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Treatment } from '../models/treatment.model';
import { DataStorageService } from './data-storage.service';
import { TreatmentService } from './treatment.service';


@Injectable({ providedIn: 'root' })
export class TreatmentResolverService implements Resolve<Treatment[]> {
  machineService: any;
  constructor(
    private dataStorageService: DataStorageService,
    private treatmentService: TreatmentService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const treatments = this.treatmentService.getTreatments();

    if (treatments.length === 0) {
      return this.dataStorageService.fetchTreatments();
    } else {
      return treatments;
    }
  }
}
