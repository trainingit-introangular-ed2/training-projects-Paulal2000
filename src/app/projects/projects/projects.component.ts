import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

let projects = environment.projects;

@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {
  public projectsClass = 'content';
  public listaClass = 'listaProyectos';
  public idSelected: number = -1;
  public listaProjects: { id: number, name: string }[];

  constructor() { }

  ngOnInit() {
    this.listaProjects = projects;
  }


}
