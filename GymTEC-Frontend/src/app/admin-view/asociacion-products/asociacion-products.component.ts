import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-asociacion-products',
  templateUrl: './asociacion-products.component.html',
  styleUrls: ['./asociacion-products.component.css']
})
export class AsociacionProductsComponent implements OnInit {

  constructor(private gymService : GymService) { }

  ngOnInit(): void {
    this.gymService.aI = false;
    this.gymService.aT = false;
    this.gymService.aP = true;
    this.gymService.cC = false;
    this.gymService.xX = false;
  }

}
