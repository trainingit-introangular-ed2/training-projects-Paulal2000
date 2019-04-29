import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../projects.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {
  public mensajeVista: string;
  public idCreado$: any;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.mensajeVista = '';
  }

  public saveProject(proyecto: any) {
    let noGuardamos = false;

    this.mensajeVista = '';

    //Chequeamos datos válidos
    if (proyecto.name === undefined) {
      noGuardamos = true;
      this.mensajeVista = 'El proyecto no se ha creado: el nombre introducido no es válido';
    }

    if (noGuardamos === false) {
      this.idCreado$ = this.projectsService.creaProyecto(proyecto);
    }
  }
}
