import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  jobs!: Job[];
  subscription!: Subscription;

  constructor(public jobService : JobService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.jobService.jobsChanged
      .subscribe(
        (jobs: Job[]) => {
          this.jobs = jobs;
        }
      );
    this.jobs = this.jobService.getJobs();
  }

  /**
  * @name onNewJob()
  * @description Sets the link to 'new'
  */
   onNewJob() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
