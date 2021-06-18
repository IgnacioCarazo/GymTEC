import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MachineType } from 'src/app/models/machine-type.model';
import { MachineTypeService } from 'src/app/services/machine-type.service';

@Component({
  selector: 'app-machine-type-detail',
  templateUrl: './machine-type-detail.component.html',
  styleUrls: ['./machine-type-detail.component.css']
})
export class MachineTypeDetailComponent implements OnInit {

  machineType!: MachineType;
  id!: number;

  constructor(private machineTypeService: MachineTypeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.machineType = this.machineTypeService.getMachineType(this.id);
        }
      );
  }

  /**
  * @name onEditMachineType()
  * @description Sets the link to 'edit'. 
  */
   onEditMachineType() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  /**
  * @name onDeleteMachineType()
  * @description Deletes the current device and sets the link back to '/devices'.
  */
   onDeleteMachineType() {
    //this.dataStorageService.deleteDevice(this.device);
    this.machineTypeService.deleteMachineType(this.id);
  }

}