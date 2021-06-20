import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Service } from '../models/service.model';
import { SpreadsheetType } from '../models/spreadsheet-type.model';
import { DataStorageService } from './data-storage.service';
import { ServiceService } from './service.service';
import { SpreadsheetService } from './spreadsheed-type.service';


@Injectable({ providedIn: 'root' })
export class SpreadsheetTypeResolverService implements Resolve<SpreadsheetType[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private spreadsheetService: SpreadsheetService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const spreadsheets = this.spreadsheetService.getspreadsheetTypes();

    if (spreadsheets.length === 0) {
      return this.dataStorageService.fetchSpreadsheetTypes();
    } else {
      return spreadsheets;
    }
  }
}
