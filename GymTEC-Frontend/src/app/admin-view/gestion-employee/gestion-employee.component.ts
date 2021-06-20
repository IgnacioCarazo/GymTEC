import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { GymService } from 'src/app/services/gym.service';
import { SpreadsheetService } from 'src/app/services/spreadsheed-type.service';

@Component({
  selector: 'app-gestion-employee',
  templateUrl: './gestion-employee.component.html',
  styleUrls: ['./gestion-employee.component.css']
})
export class GestionEmployeeComponent implements OnInit {

  constructor(public gymService : GymService,
    private spreadService : SpreadsheetService,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.list = false;
    this.spreadService.list = true;
    console.log(this.spreadService.list);
    this.gymService.aI = false;
    this.gymService.aT = false;
    this.gymService.aP = false;
    this.gymService.cC = false;
    this.gymService.xX = false;
  }

}
