import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { Gym } from 'src/app/models/gym.model';
import { GymService } from 'src/app/services/gym.service';

@Component({
  selector: 'app-gym-list',
  templateUrl: './gym-list.component.html',
  styleUrls: ['./gym-list.component.css']
})
export class GymListComponent implements OnInit {

  employees!: Employee[];
  gyms!: Gym[];
  subscription!: Subscription;

  constructor(public gymService : GymService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.gymService.gymsChanged
      .subscribe(
        (gyms: Gym[]) => {
          this.gyms = gyms;
        }
      );
    this.gyms = this.gymService.getGyms();
  }

  /**
  * @name onNewGym()
  * @description Sets the link to 'new'
  */
   onNewGym() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
