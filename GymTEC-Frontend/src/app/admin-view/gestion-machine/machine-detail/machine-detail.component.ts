import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Machine } from 'src/app/models/machine.model';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-machine-detail',
  templateUrl: './machine-detail.component.html',
  styleUrls: ['./machine-detail.component.css']
})
export class MachineDetailComponent implements OnInit {

  machine!: Machine;
  id!: number;

  constructor(private machineService: MachineService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService : DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.machine = this.machineService.getMachine(this.id);
        }
      );
  }

  /**
  * @name onEditMachine()
  * @description Sets the link to 'edit'. 
  */
   onEditMachine() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  /**
  * @name onDeleteMachine()
  * @description Deletes the current device and sets the link back to '/devices'.
  */
   onDeleteMachine() {
    this.dataStorageService.deleteMachine(this.machine);
    this.machineService.deleteMachine(this.id);
  }

}