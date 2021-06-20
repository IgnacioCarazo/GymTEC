import { Component, Input, OnInit } from '@angular/core';
import { Gym } from 'src/app/models/gym.model';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-gym-item',
  templateUrl: './gym-item.component.html',
  styleUrls: ['./gym-item.component.css']
})
export class GymItemComponent implements OnInit {

  @Input() gym!: Gym;
  @Input() index!: number;

  constructor(public gymService : GymService) { }

  ngOnInit(): void {
  }

}
