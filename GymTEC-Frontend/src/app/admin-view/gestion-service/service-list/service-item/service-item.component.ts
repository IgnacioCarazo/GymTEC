import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  @Input() service!: Service;
  @Input() index!: number;

  constructor(public serviceService : ServiceService) { }

  ngOnInit(): void {
  }

}
