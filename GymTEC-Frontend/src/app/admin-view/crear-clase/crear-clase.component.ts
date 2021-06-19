import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.css']
})
export class CrearClaseComponent implements OnInit {

  constructor(private gymService : GymService) { }

  ngOnInit(): void {
    this.gymService.aI = false;
    this.gymService.aT = false;
    this.gymService.aP = false;
    this.gymService.cC = true;
    this.gymService.xX = false;
  }

}
