import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../projects.service';

@Component({
  selector: 'app-viewer-project-form',
  templateUrl: './viewer-project-form.component.html',
  styleUrls: ['./viewer-project-form.component.css']
})
export class ViewerProjectFormComponent implements OnInit {
  @Input() public projectId: number;
  public proyecto$: any;
  @Input() public mensajeError = '';
  constructor(activateRoute: ActivatedRoute, private projectsService: ProjectsService) {
    this.projectId = activateRoute.snapshot.params['id'];
    if (this.projectId == -1) {
      this.mensajeError = 'No ha seleccionado ningún proyecto';
    } else {
      this.proyecto$ = this.projectsService.obtieneProyecto(this.projectId);
    }
  }

  ngOnInit() {}
}
