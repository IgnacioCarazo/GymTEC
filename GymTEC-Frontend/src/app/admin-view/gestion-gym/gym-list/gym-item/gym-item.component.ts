import { Component, Input, OnInit } from '@angular/core';
import { Gym } from 'src/app/models/gym.model';

@Component({
  selector: 'app-gym-item',
  templateUrl: './gym-item.component.html',
  styleUrls: ['./gym-item.component.css']
})
export class GymItemComponent implements OnInit {

  @Input() gym!: Gym;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
