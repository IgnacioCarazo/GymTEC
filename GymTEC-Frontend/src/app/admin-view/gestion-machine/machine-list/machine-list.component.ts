import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Machine } from 'src/app/models/machine.model';
import { Service } from 'src/app/models/service.model';
import { MachineTypeService } from 'src/app/services/machine-type.service';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {

  machines!: Machine[];
  subscription!: Subscription;

  constructor(private machineService : MachineService,
    public machineTypeService : MachineTypeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.machineService.machinesChanged
      .subscribe(
        (machines: Machine[]) => {
          this.machines = machines;
        }
      );
    this.machines = this.machineService.getMachines();
  }

  /**
  * @name onNewMachine()
  * @description Sets the link to 'new'
  */
   onNewMachine() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
