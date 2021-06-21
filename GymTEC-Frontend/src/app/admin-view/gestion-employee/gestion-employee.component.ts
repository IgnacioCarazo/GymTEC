import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { GymService } from 'src/app/services/gym.service';
import { JobService } from 'src/app/services/job.service';
import { SpreadsheetService } from 'src/app/services/spreadsheed-type.service';

@Component({
  selector: 'app-gestion-employee',
  templateUrl: './gestion-employee.component.html',
  styleUrls: ['./gestion-employee.component.css']
})
export class GestionEmployeeComponent implements OnInit {

  constructor(public gymService : GymService,
    private spreadService : SpreadsheetService,
    private employeeService: EmployeeService,
    private jobService : JobService) { }

  ngOnInit(): void {
    this.employeeService.list = false;
    this.spreadService.list = true;
    this.gymService.aI = false;
    this.gymService.aT = false;
    this.gymService.aP = false;
    this.gymService.cC = false;
    this.gymService.xX = false;
    this.gymService.list = true;
    this.jobService.list = true;


  }

}
