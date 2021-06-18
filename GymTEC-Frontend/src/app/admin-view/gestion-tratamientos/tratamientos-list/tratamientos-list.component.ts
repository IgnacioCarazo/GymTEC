import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Gym } from 'src/app/models/gym.model';
import { Treatment } from 'src/app/models/treatment.model';
import { TreatmentService } from 'src/app/services/treatment.service';

@Component({
  selector: 'app-tratamientos-list',
  templateUrl: './tratamientos-list.component.html',
  styleUrls: ['./tratamientos-list.component.css']
})
export class TratamientosListComponent implements OnInit {

  
  treatments!: Treatment[];
  subscription!: Subscription;

  constructor(private treatmentService : TreatmentService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.treatmentService.treatmentsChanged
      .subscribe(
        (treatments: Treatment[]) => {
          this.treatments = treatments;
        }
      );
    this.treatments = this.treatmentService.getTreatments();
  }

  /**
  * @name onNewTreatment()
  * @description Sets the link to 'new'
  */
   onNewTreatment() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
