import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SpreadsheetType } from 'src/app/models/spreadsheet-type.model';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { SpreadsheetService } from 'src/app/services/spreadsheed-type.service';

@Component({
  selector: 'app-spreadsheet-type-detail',
  templateUrl: './spreadsheet-type-detail.component.html',
  styleUrls: ['./spreadsheet-type-detail.component.css']
})
export class SpreadsheetTypeDetailComponent implements OnInit {

  spreadsheetType!: SpreadsheetType;
  id!: number;

  constructor(private spreatsheetService: SpreadsheetService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService : DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.spreadsheetType = this.spreatsheetService.getspreadsheetType(this.id);
        }
      );
  }

  /**
  * @name onEditSpreadsheetType()
  * @description Sets the link to 'edit'. 
  */
   onEditSpreadsheeType() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  /**
  * @name onDeleteSpreadsheetType()
  * @description Deletes the current device and sets the link back to '/devices'.
  */
   onDeleteSpreadsheetType() {
    this.dataStorageService.deleteSpreadsheetType(this.spreadsheetType);
    this.spreatsheetService.deleteSpreadsheetType(this.id);
  }

}