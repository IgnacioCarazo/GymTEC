import { Component, OnInit } from '@angular/core';
import { SpreadsheetService } from 'src/app/services/spreadsheed-type.service';

@Component({
  selector: 'app-gestion-spreadsheet-type',
  templateUrl: './gestion-spreadsheet-type.component.html',
  styleUrls: ['./gestion-spreadsheet-type.component.css']
})
export class GestionSpreadsheetTypeComponent implements OnInit {

  constructor(private spreadService : SpreadsheetService) { }

  ngOnInit(): void {
    this.spreadService.list = false;
    console.log(this.spreadService.list);

  }

}
