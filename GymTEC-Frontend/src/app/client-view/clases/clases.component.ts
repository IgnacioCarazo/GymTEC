import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GymClass } from 'src/app/models/gymclass.model';
import { GymClassService } from 'src/app/services/gymclass.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {
  form!: FormGroup;
  tabla_clases!: any[];
  classes!: GymClass[];
  check = '✓';

  constructor(private router : Router,
              private classService : GymClassService) { }

  ngOnInit(): void {
    this.initForm();
    this.classes = this.classService.getClasses();
    for (let item of this.classes) {
      let lista_aux = [];
      lista_aux.push(item.className);
      lista_aux.push(item.date);
      lista_aux.push(item.startTime);
      lista_aux.push(item.finnishTime);
      if (item.isGrupal) {
        lista_aux.push(this.check);
      } else {
        lista_aux.push("X");
      }
      lista_aux.push(item.capacity - item.registered);
      this.tabla_clases.push(lista_aux);

    }
    this.classService.classes_string = this.tabla_clases;

  }


  onSubmit() {      
    this.router.navigate(['/client/registro-clases']);

    console.log(this.form.value);
    this.form.reset();
  }
  


  /**
  * @name initForm()
  * @description If its edit mode it will load the inputs of the form with the preexistent values of the recipe. Otherwise
  * it will just set thes values 'empty' for the user to fill.
  */
   private initForm() {
    let gymClass = '';
    let gym = '';

    this.form = new FormGroup({
      gymClass: new FormControl(gymClass),
      gym: new FormControl(gym),
    });
  }

  

}
