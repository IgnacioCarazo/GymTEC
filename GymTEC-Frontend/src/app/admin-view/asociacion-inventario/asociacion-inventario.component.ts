import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-asociacion-inventario',
  templateUrl: './asociacion-inventario.component.html',
  styleUrls: ['./asociacion-inventario.component.css']
})
export class AsociacionInventarioComponent implements OnInit {

  constructor(private gymService : GymService) { }

  ngOnInit(): void {
    this.gymService.aI = true;
    this.gymService.aT = false;
    this.gymService.aP = false;
    this.gymService.cC = false;
    this.gymService.xX = false;
  }

}
