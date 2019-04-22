import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ProjectsService } from './projects.service';


@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {
  public projectsClass = 'content';
  public listaProjects: { id: number, name: string }[];
  public mensajeVista = '';

  constructor( private projectsService: ProjectsService ) { }

  ngOnInit() {
    this.listaProjects = environment.projects;
  }
  public filtrarProyPorNombre( filtro: string ) {
    this.listaProjects = this.projectsService.filtrarProyecto( filtro );
  }




}
