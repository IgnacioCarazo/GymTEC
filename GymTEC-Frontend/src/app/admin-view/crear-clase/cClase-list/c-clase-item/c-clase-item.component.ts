import { Component, Input, OnInit } from '@angular/core';
import { ClasesComponent } from 'src/app/client-view/clases/clases.component';
import { GymClass } from 'src/app/models/gymclass.model';

@Component({
  selector: 'app-c-clase-item',
  templateUrl: './c-clase-item.component.html',
  styleUrls: ['./c-clase-item.component.css']
})
export class CClaseItemComponent implements OnInit {

  @Input() class!: GymClass;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
