import { Component, Input, OnInit } from '@angular/core';
import { MachineType } from 'src/app/models/machine-type.model';
import { MachineTypeService } from 'src/app/services/machine-type.service';

@Component({
  selector: 'app-machine-type-item',
  templateUrl: './machine-type-item.component.html',
  styleUrls: ['./machine-type-item.component.css']
})
export class MachineTypeItemComponent implements OnInit {

  @Input() machineType!: MachineType;
  @Input() index!: number;

  constructor(public machineTypeService : MachineTypeService) { }

  ngOnInit(): void {
  }

}
