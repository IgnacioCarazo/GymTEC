import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Treatment } from 'src/app/models/treatment.model';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { TreatmentService } from 'src/app/services/treatment.service';

@Component({
  selector: 'app-tratamientos-detail',
  templateUrl: './tratamientos-detail.component.html',
  styleUrls: ['./tratamientos-detail.component.css']
})
export class TratamientosDetailComponent implements OnInit {

  treatment!: Treatment;
  id!: number;

  constructor(private treatmentService: TreatmentService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService : DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.treatment = this.treatmentService.getTreatment(this.id);
        }
      );
  }

  /**
  * @name onEditTreatment()
  * @description Sets the link to 'edit'. 
  */
   onEditTreatment() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  /**
  * @name onDeleteTreatment()
  * @description Deletes the current device and sets the link back to '/devices'.
  */
   onDeleteTreatment() {
    this.dataStorageService.deleteTreatments(this.treatment);
    this.treatmentService.deleteTreatment(this.id);
  }

}