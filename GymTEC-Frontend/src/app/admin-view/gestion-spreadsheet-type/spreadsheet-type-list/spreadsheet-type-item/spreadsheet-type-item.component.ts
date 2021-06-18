import { Component, Input, OnInit } from '@angular/core';
import { SpreadsheetType } from 'src/app/models/spreadsheet-type.model';

@Component({
  selector: 'app-spreadsheet-type-item',
  templateUrl: './spreadsheet-type-item.component.html',
  styleUrls: ['./spreadsheet-type-item.component.css']
})
export class SpreadsheetTypeItemComponent implements OnInit {

  @Input() spreadsheetType!: SpreadsheetType;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
