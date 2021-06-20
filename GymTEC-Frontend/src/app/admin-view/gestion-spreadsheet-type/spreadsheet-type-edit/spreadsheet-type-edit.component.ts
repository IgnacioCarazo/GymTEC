import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { SpreadsheetService } from 'src/app/services/spreadsheed-type.service';

@Component({
  selector: 'app-spreadsheet-type-edit',
  templateUrl: './spreadsheet-type-edit.component.html',
  styleUrls: ['./spreadsheet-type-edit.component.css']
})
export class SpreadsheetTypeEditComponent implements OnInit {

  id!: number;
  editMode = false;
  form!: FormGroup;
  
  constructor(private route: ActivatedRoute,
              private spreadsheetService: SpreadsheetService,
              private router: Router,
              private dataStorageService : DataStorageService) { }

 
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  /**
  * @name onSubmit()
  * @description Depending if its edit mode or add new recipe mode it will update or add the current recipe.
  */
   onSubmit() {
     console.log(this.form.value);

    if (this.editMode) {
      this.spreadsheetService.updateSpreadsheetType(this.id, this.form.value);
      this.dataStorageService.updateSpreadsheetType(this.form.value);
    } else {
      this.spreadsheetService.addSpreadsheetType(this.form.value);
      this.dataStorageService.storeService(this.form.value);
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
      let name = '';
      let id = 0;
      let description = '';
      
      if (this.editMode) {
        const spreadsheetType = this.spreadsheetService.getspreadsheetType(this.id);
        name = spreadsheetType.name;
        id = spreadsheetType.id;
        description = spreadsheetType.description;
        }
       
  
  
  
       
  
      this.form = new FormGroup({
        name: new FormControl(name, Validators.required),
        id: new FormControl(id, Validators.required),
        description: new FormControl(description, Validators.required),

      });
    }
}
