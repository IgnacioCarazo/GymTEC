import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MachineType } from 'src/app/models/machine-type.model';
import { MachineTypeService } from 'src/app/services/machine-type.service';

@Component({
  selector: 'app-machine-type-list',
  templateUrl: './machine-type-list.component.html',
  styleUrls: ['./machine-type-list.component.css']
})
export class MachineTypeListComponent implements OnInit {
  machineTypes!: MachineType[];
  subscription!: Subscription;

  constructor(private machineTypeService : MachineTypeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.machineTypeService.machineTypesChangerd
      .subscribe(
        (machineTypes: MachineType[]) => {
          this.machineTypes = machineTypes;
        }
      );
    this.machineTypes = this.machineTypeService.getMachineTypes();
  }

  /**
  * @name onNewMachineType()
  * @description Sets the link to 'new'
  */
   onNewMachineType() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
