import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Gym } from 'src/app/models/gym.model';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-gym-detail',
  templateUrl: './gym-detail.component.html',
  styleUrls: ['./gym-detail.component.css']
})
export class GymDetailComponent implements OnInit {

  gym!: Gym;
  id!: number;

  constructor(private gymService: GymService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.gym = this.gymService.getGym(this.id);
        }
      );
  }

  /**
  * @name onEditGym()
  * @description Sets the link to 'edit'. 
  */
   onEditGym() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  /**
  * @name onDeleteGym()
  * @description Deletes the current device and sets the link back to '/devices'.
  */
   onDeleteGym() {
    //this.dataStorageService.deleteDevice(this.device);
    this.gymService.deleteGym(this.id);
  }

}
