import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Employee } from '../models/employee.model';
import { Job } from '../models/job.model';
import { MachineType } from '../models/machine-type.model';
import { Machine } from '../models/machine.model';
import { DataStorageService } from './data-storage.service';
import { EmployeeService } from './employee.service';
import { JobService } from './job.service';
import { MachineTypeService } from './machine-type.service';
import { MachineService } from './machine.service';


@Injectable({ providedIn: 'root' })
export class MachineResolverService implements Resolve<Machine[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private machineService: MachineService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const machines = this.machineService.getMachines();

    if (machines.length === 0) {
      return this.dataStorageService.fetchMachines();
    } else {
      return machines;
    }
  }
}
