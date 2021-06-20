import { Component, OnInit } from '@angular/core';
import { MachineTypeService } from 'src/app/services/machine-type.service';

@Component({
  selector: 'app-gestion-machine',
  templateUrl: './gestion-machine.component.html',
  styleUrls: ['./gestion-machine.component.css']
})
export class GestionMachineComponent implements OnInit {

  constructor(private machineTypeService : MachineTypeService) { }

  ngOnInit(): void {
    this.machineTypeService.list = true;
    console.log(this.machineTypeService.list);
  }

}
