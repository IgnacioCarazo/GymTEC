import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-gestion-gym',
  templateUrl: './gestion-gym.component.html',
  styleUrls: ['./gestion-gym.component.css']
})
export class GestionGymComponent implements OnInit {

  constructor(public gymService : GymService,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.employeeService.list = true;
    this.gymService.list = false;
    this.gymService.aI = false;
    this.gymService.aT = false;
    this.gymService.aP = false;
    this.gymService.cC = false;
    this.gymService.xX = true;


  }

}
