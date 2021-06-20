import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-gestion-service',
  templateUrl: './gestion-service.component.html',
  styleUrls: ['./gestion-service.component.css']
})
export class GestionServiceComponent implements OnInit {

  constructor(private serviceService : ServiceService) { }

  ngOnInit(): void {
    this.serviceService.list = false;
  }

}
