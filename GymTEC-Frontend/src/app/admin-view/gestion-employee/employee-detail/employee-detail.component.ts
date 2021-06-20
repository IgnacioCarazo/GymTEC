import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee!: Employee;
  id!: number;

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService : DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.employee = this.employeeService.getEmployee(this.id);
        }
      );
  }

  /**
  * @name onEditEmployee()
  * @description Sets the link to 'edit'. 
  */
   onEditEmployee() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  /**
  * @name onDeleteEmployee()
  * @description Deletes the current employee and sets the link back to '/employees'.
  */
   onDeleteEmployee() {
    this.dataStorageService.deleteEmployee(this.employee);
    this.employeeService.deleteEmployee(this.id);
  }

}