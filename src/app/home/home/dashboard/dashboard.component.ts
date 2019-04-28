import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../projects/projects/projects.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public numProjects$: number;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.numProjects$ = Number(this.projectsService.numProyectos());
  }

}
