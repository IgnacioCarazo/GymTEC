import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Employee } from '../models/employee.model';
import { Job } from '../models/job.model';
import { MachineType } from '../models/machine-type.model';
import { DataStorageService } from './data-storage.service';
import { EmployeeService } from './employee.service';
import { JobService } from './job.service';
import { MachineTypeService } from './machine-type.service';


@Injectable({ providedIn: 'root' })
export class MachineTypeResolverService implements Resolve<MachineType[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private machineTypeService: MachineTypeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const machineTypes = this.machineTypeService.getMachineTypes();

    if (machineTypes.length === 0) {
      return this.dataStorageService.fetchMachineTypes();
    } else {
      return machineTypes;
    }
  }
}
