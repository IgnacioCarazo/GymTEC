import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Employee } from '../models/employee.model';
import { DataStorageService } from './data-storage.service';
import { EmployeeService } from './employee.service';


@Injectable({ providedIn: 'root' })
export class EmployeeResolverService implements Resolve<Employee[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private employeeService: EmployeeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const employees = this.employeeService.getEmployees();

    if (employees.length === 0) {
      return this.dataStorageService.fetchEmployees();
    } else {
      return employees;
    }
  }
}
