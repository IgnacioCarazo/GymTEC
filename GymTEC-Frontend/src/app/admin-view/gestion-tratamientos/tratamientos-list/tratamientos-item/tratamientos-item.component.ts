import { Component, Input, OnInit } from '@angular/core';
import { Treatment } from 'src/app/models/treatment.model';

@Component({
  selector: 'app-tratamientos-item',
  templateUrl: './tratamientos-item.component.html',
  styleUrls: ['./tratamientos-item.component.css']
})
export class TratamientosItemComponent implements OnInit {

  @Input() treatment!: Treatment;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
