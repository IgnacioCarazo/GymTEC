import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GymClass } from 'src/app/models/gymclass.model';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { GymClassService } from 'src/app/services/gymclass.service';

@Component({
  selector: 'app-c-clase-detail',
  templateUrl: './c-clase-detail.component.html',
  styleUrls: ['./c-clase-detail.component.css']
})
export class CClaseDetailComponent implements OnInit {

  gymClass!: GymClass;
  id!: number;
  grupal!: string;

  constructor(private classService: GymClassService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService : DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.gymClass = this.classService.getClass(this.id);
          if (this.gymClass.isGrupal) {
            this.grupal = "Si";
          } else {
            this.grupal = "No";
          }
        }
      );
  }

  /**
  * @name onEditClass()
  * @description Sets the link to 'edit'. 
  */
   onEditClass() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  /**
  * @name onDeleteClass()
  * @description Deletes the current class and sets the link back to '/crear clase'.
  */
   onDeleteClass() {
    this.dataStorageService.deleteGymClass(this.gymClass);
    this.classService.deleteClass(this.id);
  }

}