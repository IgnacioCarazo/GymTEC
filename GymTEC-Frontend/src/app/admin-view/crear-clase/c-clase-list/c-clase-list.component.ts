import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { GymClass } from 'src/app/models/gymclass.model';
import { GymClassService } from 'src/app/services/gymclass.service';

@Component({
  selector: 'app-c-clase-list',
  templateUrl: './c-clase-list.component.html',
  styleUrls: ['./c-clase-list.component.css']
})
export class CClaseListComponent implements OnInit {

  
  classes!: GymClass[];
  subscription!: Subscription;

  constructor(private classService : GymClassService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.classService.classesChanged
      .subscribe(
        (classes: GymClass[]) => {
          this.classes = classes;
        }
      );
    this.classes = this.classService.getClasses();
  }

  /**
  * @name onNewGymClass()
  * @description Sets the link to 'new'
  */
   onNewGymClass() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
