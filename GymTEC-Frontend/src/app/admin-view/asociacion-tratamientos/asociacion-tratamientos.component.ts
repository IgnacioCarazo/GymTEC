import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-asociacion-tratamientos',
  templateUrl: './asociacion-tratamientos.component.html',
  styleUrls: ['./asociacion-tratamientos.component.css']
})
export class AsociacionTratamientosComponent implements OnInit {

  constructor(private gymService : GymService) { }

  ngOnInit(): void {
    this.gymService.aI = false;
    this.gymService.aT = true;
    this.gymService.aP = false;
    this.gymService.cC = false;
    this.gymService.xX = false;
    this.gymService.list = false;

  }

}
