import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ProjectsService } from './projects.service';

let projects = environment.projects;

@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {
  public listaProjects: { id: number, name: string }[];
  public mensajeVista = '';

  constructor( private projectsService: ProjectsService ) { }



  ngOnInit() {
    this.listaProjects = projects;
  }


  public filtrarProyectos( filtro: any ) {
    this.listaProjects = this.projectsService.filtrarProyecto( filtro );
  }




}
