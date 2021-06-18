import { Component, Input, OnInit } from '@angular/core';
import { Machine } from 'src/app/models/machine.model';

@Component({
  selector: 'app-machine-item',
  templateUrl: './machine-item.component.html',
  styleUrls: ['./machine-item.component.css']
})
export class MachineItemComponent implements OnInit {

  @Input() machine!: Machine;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
