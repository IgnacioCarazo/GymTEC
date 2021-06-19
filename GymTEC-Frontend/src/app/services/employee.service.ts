import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Employee } from "../models/employee.model";


@Injectable()
export class EmployeeService {

    private employees: Employee[] = [];
    public employee!: Employee;
    employeesChanged = new Subject<Employee[]>();
  
    constructor() {
  
      this.employees = [new Employee("Nacho"),new Employee("Haziel"),new Employee("Joseph")];
    }

  /**
  * @name setEmployees()
  * @argument {Employee[]} employees
  * @description  It set this service devices with the value of the devices argument.
  */
   setEmployees(employees: Employee[]) {
    this.employees = employees;
    this.employeesChanged.next(this.employees.slice());
  }
  
    /**
    * @name getEmployees()
    * @returns The array of employees of this service.  
    */
     getEmployees() {
      return this.employees.slice();
    }
  
     /**
    * @name getEmployee()
    * @description It searches a employee by its index
    * @returns {Job} A job
    */
      getEmployee(index: number) {
        return this.employees[index];
      }
  
       /**
    * @name deleteEmployee()
    * @argument {number} index
    * @description deletes a employee by its index from this service devices array.
    */
    deleteEmployee(index: number) {
      this.employees.splice(index, 1);
      this.employeesChanged.next(this.employees.slice());
    }
  
     /**
    * @name addEmployee()
    * @argument {Employee} employee
    * @description  Adds an employee to this service array of devices
    */
      addEmployee(employee: Employee) {
        this.employees.push(employee);
        this.employeesChanged.next(this.employees.slice());
      }
   
    /**
    * @name updateEmployee()
    * @argument {number} index
    * @argument {Employee} newEmployee
    * @description  It updates the value of a employee of this service devices array. 
    */
     updateEmployee(index: number, newEmployee: Employee) {
      this.employees[index] = newEmployee;
      this.employeesChanged.next(this.employees.slice());
    }

    
  }