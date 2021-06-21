import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-gestion-job',
  templateUrl: './gestion-job.component.html',
  styleUrls: ['./gestion-job.component.css']
})
export class GestionJobComponent implements OnInit {

  constructor(private jobService : JobService) { }

  ngOnInit(): void {
    this.jobService.list = false;
  }

}
