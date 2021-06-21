import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Job } from "../models/job.model";

@Injectable()
export class JobService {

    public list!: boolean;

    private jobs: Job[] = [];
    jobsChanged = new Subject<Job[]>();
  
    constructor() {
  
      this.jobs = [];
    }

   /**
  * @name setJobs()
  * @argument {Job[]} jobs
  * @description  It set this service jobs with the value of the jobs argument.
  */
    setJobs(jobs: Job[]) {
      this.jobs = jobs;
      this.jobsChanged.next(this.jobs.slice());
    }    
  
    /**
    * @name getJobs()
    * @returns The array of jobs of this service.  
    */
     getJobs() {
      return this.jobs.slice();
    }
  
     /**
    * @name getJob()
    * @description It searches a job by its index
    * @returns {Job} A job
    */
      getJob(index: number) {
        return this.jobs[index];
      }
  
       /**
    * @name deleteJob()
    * @argument {number} index
    * @description deletes a job by its index from this service devices array.
    */
    deleteJob(index: number) {
      this.jobs.splice(index, 1);
      this.jobsChanged.next(this.jobs.slice());
    }
  
     /**
    * @name addJobs()
    * @argument {Jobs} treatment
    * @description  Adds a job to this service array of devices
    */
      addJob(job: Job) {
        this.jobs.push(job);
        this.jobsChanged.next(this.jobs.slice());
      }
   
    /**
    * @name updateJob()
    * @argument {number} index
    * @argument {Job} newJob
    * @description  It updates the value of a job of this service devices array. 
    */
     updateJob(index: number, newTreatment: Job) {
      this.jobs[index] = newTreatment;
      this.jobsChanged.next(this.jobs.slice());
    }

    
  }