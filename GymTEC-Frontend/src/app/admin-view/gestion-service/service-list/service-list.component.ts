import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Job } from 'src/app/models/job.model';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services!: Service[];
  subscription!: Subscription;

  constructor(public serviceService : ServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.serviceService.servicesChanged
      .subscribe(
        (services: Service[]) => {
          this.services = services;
        }
      );
    this.services = this.serviceService.getServices();
  }

  /**
  * @name onNewService()
  * @description Sets the link to 'new'
  */
   onNewService() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
