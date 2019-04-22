import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';

let projects = environment.projects;
>>>>>>> 161a7b4616de2911258995cd1bf64d25d2a1914a

@Component( {
  selector: 'app-viewerproject',
  templateUrl: './viewerproject.component.html',
  styleUrls: ['./viewerproject.component.css']
} )
export class ViewerprojectComponent implements OnInit {
<<<<<<< HEAD
  
  constructor( ) {    
  }

  ngOnInit() {
=======
  public projectId: number;
  public listaProjects: { id: number, name: string }[];
  public projectName = '';
  public mensajeError = '';
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
>>>>>>> 161a7b4616de2911258995cd1bf64d25d2a1914a
  }

}
