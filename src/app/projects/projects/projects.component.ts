import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projectsClass = 'content';
  public listaProjects$: any;
  public mensajeVista = '';

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.listaProjects$ = this.projectsService.listarProyectos();
  }

  public filtrarProyPorNombre(filtro: any) {
    this.listaProjects$ = this.projectsService.filtrarProyecto(filtro);
  }
}
