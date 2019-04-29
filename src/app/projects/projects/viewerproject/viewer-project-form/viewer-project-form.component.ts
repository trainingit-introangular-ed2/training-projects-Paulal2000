import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Proyecto } from '../../../models/proyecto';
import { ProjectsService } from '../../projects.service';


@Component( {
  selector: 'app-viewer-project-form',
  templateUrl: './viewer-project-form.component.html',
  styleUrls: ['./viewer-project-form.component.css']
} )
export class ViewerProjectFormComponent implements OnInit {
  @Input() public projectId: number;
  @Input() public listaProjects$: Observable<Proyecto[]>;
  @Input() public projectName = '';
  @Input() public mensajeError = '';
  constructor( activateRoute: ActivatedRoute, private projectsService: ProjectsService ) {
    this.projectId = activateRoute.snapshot.params['id'];
    if ( this.projectId == -1 ) {
      this.mensajeError = 'No ha seleccionado ningún proyecto';
    }
  }

  ngOnInit() {

    this.listaProjects$ = this.projectsService.listarProyectos();

    for ( let index = 0; index < Number( this.projectsService.numProyectos() ); index++ ) {
      var id = this.listaProjects$[index]["id"];
      if ( id == this.projectId ) {
        this.projectName = this.listaProjects$[index]["name"];
      }
    };
  }


}
