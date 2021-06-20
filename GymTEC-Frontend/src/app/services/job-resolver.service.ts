import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Employee } from '../models/employee.model';
import { Job } from '../models/job.model';
import { DataStorageService } from './data-storage.service';
import { EmployeeService } from './employee.service';
import { JobService } from './job.service';


@Injectable({ providedIn: 'root' })
export class JobResolverService implements Resolve<Job[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private jobService: JobService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const jobs = this.jobService.getJobs();

    if (jobs.length === 0) {
      return this.dataStorageService.fetchJobs();
    } else {
      return jobs;
    }
  }
}
