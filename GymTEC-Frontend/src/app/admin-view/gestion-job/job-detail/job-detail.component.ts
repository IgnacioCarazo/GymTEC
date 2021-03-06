import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Job } from 'src/app/models/job.model';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  job!: Job;
  id!: number;

  constructor(private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService : DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.job = this.jobService.getJob(this.id);
        }
      );
  }

  /**
  * @name onEditJob()
  * @description Sets the link to 'edit'. 
  */
   onEditJob() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  /**
  * @name onDeleteJob()
  * @description Deletes the current device and sets the link back to '/devices'.
  */
   onDeleteJob() {
    this.dataStorageService.deleteJob(this.job);
    this.jobService.deleteJob(this.id);
  }

}