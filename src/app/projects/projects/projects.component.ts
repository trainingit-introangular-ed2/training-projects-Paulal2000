import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';
import { ProjectsService } from './projects.service';


@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {
  public projectsClass = 'content';
  public listaProjects$: Observable<Proyecto[]>;
  public mensajeVista = '';

  constructor( private projectsService: ProjectsService ) { }

  ngOnInit() {
    this.listaProjects$ = this.projectsService.listarProyectos();
  }
  public filtrarProyPorNombre( filtro: string ) {
    this.listaProjects$ = this.projectsService.filtrarProyecto( filtro );
  }




}
