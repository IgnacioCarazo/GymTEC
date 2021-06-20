import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {

  @Input() employee!: Employee;
  @Input() index!: number;

  constructor(public gymService : GymService,
    public employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

}
