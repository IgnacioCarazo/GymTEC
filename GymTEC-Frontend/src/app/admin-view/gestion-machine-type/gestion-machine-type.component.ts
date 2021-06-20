import { Component, OnInit } from '@angular/core';
import { MachineTypeService } from 'src/app/services/machine-type.service';

@Component({
  selector: 'app-gestion-machine-type',
  templateUrl: './gestion-machine-type.component.html',
  styleUrls: ['./gestion-machine-type.component.css']
})
export class GestionMachineTypeComponent implements OnInit {

  constructor(private machineTypeService : MachineTypeService) { }

  ngOnInit(): void {
    this.machineTypeService.list = false;
    console.log(this.machineTypeService.list);
  }

}
