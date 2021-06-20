import { Component, Input, OnInit } from '@angular/core';
import { SpreadsheetType } from 'src/app/models/spreadsheet-type.model';
import { SpreadsheetService } from 'src/app/services/spreadsheed-type.service';

@Component({
  selector: 'app-spreadsheet-type-item',
  templateUrl: './spreadsheet-type-item.component.html',
  styleUrls: ['./spreadsheet-type-item.component.css']
})
export class SpreadsheetTypeItemComponent implements OnInit {

  @Input() spreadsheetType!: SpreadsheetType;
  @Input() index!: number;

  constructor(public spreadsheetService : SpreadsheetService,) { }

  ngOnInit(): void {
  }

}
