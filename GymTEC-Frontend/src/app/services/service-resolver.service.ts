import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Service } from '../models/service.model';
import { DataStorageService } from './data-storage.service';
import { ServiceService } from './service.service';


@Injectable({ providedIn: 'root' })
export class ServiceResolverService implements Resolve<Service[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private serviceService: ServiceService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const services = this.serviceService.getServices();

    if (services.length === 0) {
      return this.dataStorageService.fetchServices();
    } else {
      return services;
    }
  }
}
