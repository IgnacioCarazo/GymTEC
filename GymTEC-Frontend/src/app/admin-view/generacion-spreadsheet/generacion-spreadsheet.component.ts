import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generacion-spreadsheet',
  templateUrl: './generacion-spreadsheet.component.html',
  styleUrls: ['./generacion-spreadsheet.component.css']
})
export class GeneracionSpreadsheetComponent implements OnInit {

  planilla!: string[];

  constructor() { }

  ngOnInit(): void {
  }


  generarPlanilla() {

  }
}
