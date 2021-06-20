import { Component, OnInit } from '@angular/core';
import { GenerateWorksheet } from 'src/app/models/generatedSS.model';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { SpreadsheetService } from 'src/app/services/spreadsheed-type.service';

@Component({
  selector: 'app-generacion-spreadsheet',
  templateUrl: './generacion-spreadsheet.component.html',
  styleUrls: ['./generacion-spreadsheet.component.css']
})
export class GeneracionSpreadsheetComponent implements OnInit {

  flag!: boolean;
  lista: any[] = [];
  planilla!: GenerateWorksheet[];

  constructor(public spreadsheetService : SpreadsheetService,
    public dataStorageService : DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageService.fetchPlanilla().
    subscribe( planilla => {
      this.spreadsheetService.spreadsheetGenerated = planilla;
    });
    this.planilla = this.spreadsheetService.spreadsheetGenerated;
  }


  generarPlanilla() {
    let listaaux = [];
    this.planilla = this.spreadsheetService.spreadsheetGenerated;
    for (let item of this.planilla) {
      listaaux.push(item.sucursal);
      listaaux.push(item.fullname);
      listaaux.push(item.id);
      listaaux.push(item.laboredHours);
      listaaux.push(item.numberOfClasses);
      listaaux.push(item.spreadType);
      listaaux.push(item.totalWage);
      this.lista.push(listaaux);
      


    }
    this.flag = true;


  }
}
