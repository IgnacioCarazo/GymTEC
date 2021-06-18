import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {

  @Input() employee!: Employee;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
