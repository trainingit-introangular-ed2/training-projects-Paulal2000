import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../projects.service';


@Component( {
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
} )
export class NewprojectComponent implements OnInit {
  public mensajeVista: string;

  constructor( private projectsService: ProjectsService ) { }

  ngOnInit() {
    this.mensajeVista = '';
  }

  public saveProject( proyecto: { id: number, name: string } ) {

    let noGuardamos: boolean = false;

    //Chequeamos datos válidos
    let nombre = String( proyecto.name );

    if ( !( proyecto.id > 0 ) ) {
      noGuardamos = true;
      this.mensajeVista = 'El proyecto no se ha creado: el identificador introducido no es válido';
    }

    if ( nombre.length === 0 ) {
      noGuardamos = true;
      this.mensajeVista = 'El proyecto no se ha creado: el nombre introducido no es válido';
    }

    if ( !( proyecto.id > 0 ) ) {
      if ( proyecto.name.length === 0 ) {
        noGuardamos = true;
        this.mensajeVista = 'El proyecto no se ha creado: el identificador y nombre introducidos no son válidos';
      }
    }

    let listaProjects = this.projectsService.listarProyectos();

    //Chequeamos si el ID existe
    for ( let index = 0; index < Number( this.projectsService.numProyectos ); index++ ) {
      var identificador = listaProjects[index]["id"];
      if ( identificador == proyecto.id ) {
        noGuardamos = true;
        this.mensajeVista = 'El proyecto no se ha creado: el identificador introducido ya existe';
      }
    };


    if ( noGuardamos === false ) {
      this.projectsService.creaProyecto( proyecto );
      this.mensajeVista = 'El proyecto se ha creado con éxito';
    }
  }


}
