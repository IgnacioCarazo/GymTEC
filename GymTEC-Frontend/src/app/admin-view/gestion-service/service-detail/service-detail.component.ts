import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Service } from 'src/app/models/service.model';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  service!: Service;
  id!: number;

  constructor(private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService : DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.service = this.serviceService.getService(this.id);
        }
      );
  }

  /**
  * @name onEditService()
  * @description Sets the link to 'edit'. 
  */
   onEditService() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  /**
  * @name onDeleteService()
  * @description Deletes the current device and sets the link back to '/devices'.
  */
   onDeleteService() {
    this.dataStorageService.deleteService(this.service);
    this.serviceService.deleteService(this.id);
  }

}