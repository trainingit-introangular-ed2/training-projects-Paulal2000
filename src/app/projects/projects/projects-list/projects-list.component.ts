import { Component, Input, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  @Input() public listaClass = 'listaProyectos';
  @Input() public idSelected: number = -1;
  @Input() public listaProjects: { id: number, name: string }[];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.listaProjects = this.projectsService.listarProyectos();
  }

}
