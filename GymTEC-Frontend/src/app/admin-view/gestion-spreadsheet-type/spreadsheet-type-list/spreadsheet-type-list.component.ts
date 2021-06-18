import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpreadsheetType } from 'src/app/models/spreadsheet-type.model';
import { SpreadsheetService } from 'src/app/services/spreadsheed-type.service';

@Component({
  selector: 'app-spreadsheet-type-list',
  templateUrl: './spreadsheet-type-list.component.html',
  styleUrls: ['./spreadsheet-type-list.component.css']
})
export class SpreadsheetTypeListComponent implements OnInit {

  spreadsheetTypes!: SpreadsheetType[];
  subscription!: Subscription;

  constructor(private spreadsheetService : SpreadsheetService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.spreadsheetService.spreadsheetTypesChanged
      .subscribe(
        (spreadsheetTypes: SpreadsheetType[]) => {
          this.spreadsheetTypes = spreadsheetTypes;
        }
      );
    this.spreadsheetTypes = this.spreadsheetService.getspreadsheetTypes();
  }

  /**
  * @name onNewSpreadsheetType()
  * @description Sets the link to 'new'
  */
   onNewSpreadsheetType() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
