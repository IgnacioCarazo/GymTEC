import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  subscription!: Subscription;

  constructor(private employeeService : EmployeeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.employeeService.employeesChanged
      .subscribe(
        (employees: Employee[]) => {
          this.employees = employees;
        }
      );
    this.employees = this.employeeService.getEmployees();
  }

  /**
  * @name onNewEmployee()
  * @description Sets the link to 'new'
  */
   onNewEmployee() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
