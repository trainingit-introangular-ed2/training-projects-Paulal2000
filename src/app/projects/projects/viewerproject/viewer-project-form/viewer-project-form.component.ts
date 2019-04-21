import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../../environments/environment';

let projects = environment.projects;

@Component({
  selector: 'app-viewer-project-form',
  templateUrl: './viewer-project-form.component.html',
  styleUrls: ['./viewer-project-form.component.css']
})
export class ViewerProjectFormComponent implements OnInit {
  @Input()  public projectId: number;
  @Input() public listaProjects: { id: number, name: string }[];
  @Input() public projectName = '';
  @Input() public mensajeError = '';
  constructor( activateRoute: ActivatedRoute ) {
    this.projectId = activateRoute.snapshot.params['id'];
    if ( this.projectId == -1 ) {
      this.mensajeError = 'No ha seleccionado ningún proyecto';
    }
  }

  ngOnInit() {
    this.listaProjects = projects;

    for ( let index = 0; index < this.listaProjects.length; index++ ) {
      var id = this.listaProjects[index]["id"];
      if ( id == this.projectId ) {
        this.projectName = this.listaProjects[index]["name"];
      }
    };
  }


}
