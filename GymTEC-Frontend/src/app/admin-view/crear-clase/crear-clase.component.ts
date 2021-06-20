import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { GymService } from 'src/app/services/gym.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.css']
})
export class CrearClaseComponent implements OnInit {

  constructor(public gymService : GymService,
    public employeeService : EmployeeService,
    public serviceService : ServiceService) { }

  ngOnInit(): void {
    this.gymService.aI = false;
    this.gymService.aT = false;
    this.gymService.aP = false;
    this.gymService.cC = true;
    this.gymService.xX = false;
    this.gymService.list = true;
    this.employeeService.list = true;
    this.serviceService.list = true;

  }

}
