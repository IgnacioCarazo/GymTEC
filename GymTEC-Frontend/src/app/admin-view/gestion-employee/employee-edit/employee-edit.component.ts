import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employeeID!: number;
  id!: number;
  editMode = false;
  form!: FormGroup;
  
  constructor(private route: ActivatedRoute,
              private employeeService: EmployeeService,
              private router: Router,
              private dataStorageService : DataStorageService) { }

 
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
    this.dataStorageService.fetchEmployees(); 

  }

  /**
  * @name onSubmit()
  * @description Depending if its edit mode or add new recipe mode it will update or add the current recipe.
  */
   onSubmit() {
     console.log(this.form.value);

    if (this.editMode) {
      this.employeeService.updateEmployee(this.id, this.form.value);
      this.dataStorageService.updateEmployee(this.form.value);
      this.dataStorageService.fetchEmployees(); 

    } else {
      this.employeeService.addEmployee(this.form.value);
      this.dataStorageService.storeEmployee(this.form.value)
      this.dataStorageService.fetchEmployees(); 

    }
    this.onCancel();
  }

  /**
  * @name onCancel()
  * @description Returns the link to its previous link.
  */
   onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

   /**
  * @name initForm()
  * @description If its edit mode it will load the inputs of the form with the preexistent values of the recipe. Otherwise
  * it will just set thes values 'empty' for the user to fill.
  */
    private initForm() {
      
      let id = 0;
      let name = '';
      let primaryLastName = '';
      let secondaryLastName = '';
      let province = '';
      let canton = '';
      let district = '';
      let email = '';
      let password = '';
      let numberOfClasses = 0;
      let laboredHours = 0;
      let salary = 0;
      let role = '';
      let spreadsheetTypeID = 0;
      
      if (this.editMode) {
        const employee = this.employeeService.getEmployee(this.id);
        name = employee.name;
        id = employee.id;
        this.employeeID = employee.id;
        primaryLastName = employee.primaryLastName;
        secondaryLastName = employee.secondaryLastName;
        province = employee.province;
        canton = employee.canton;
        spreadsheetTypeID = employee.spreadsheetTypeID;
        district = employee.district;
        email = employee.email;
        password = employee.password;
        numberOfClasses = employee.numberOfClasses;
        laboredHours = employee.laboredHours;
        salary = employee.salary;
        role = employee.role;
        }
       
  
  
  
       
  
      this.form = new FormGroup({
        name: new FormControl(name, Validators.required),
        id: new FormControl(id, Validators.required),
        primaryLastName: new FormControl(primaryLastName, Validators.required),
        secondaryLastName: new FormControl(secondaryLastName, Validators.required),
        province: new FormControl(province, Validators.required),
        canton: new FormControl(canton, Validators.required),
        district: new FormControl(district, Validators.required),
        email: new FormControl(email, Validators.required),
        password: new FormControl(Md5.hashStr(password), Validators.required),
        numberOfClasses: new FormControl(numberOfClasses, Validators.required),
        laboredHours: new FormControl(laboredHours, Validators.required),
        salary: new FormControl(salary, Validators.required),
        role: new FormControl(role, Validators.required),
        spreadsheetTypeID: new FormControl(spreadsheetTypeID, Validators.required),
      });
    }
}
