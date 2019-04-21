import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

let projects = environment.projects;

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  
  @Input() public newClass = 'content';
  @Input() public idNuevo: number;
  @Input() public nombreNuevo: string = '';
  @Input() public listaProjects: { id: number, name: string }[];
  @Input() public mensajeVista = '';

  constructor() { }

  ngOnInit() {
    this.listaProjects = projects;
  }

  public saveProject() {

    let noGuardamos: boolean = false;

    //Chequeamos datos válidos
    if ( !( this.idNuevo > 0 ) ) {
      noGuardamos = true;
      this.mensajeVista = 'El proyecto no se ha creado: el identificador introducido no es válido';
    }

    if ( this.nombreNuevo.length == 0 ) {
      noGuardamos = true;
      this.mensajeVista = 'El proyecto no se ha creado: el nombre introducido no es válido';
    }

    if ( !( this.idNuevo > 0 ) ) {
      if ( this.nombreNuevo.length == 0 ) {
        noGuardamos = true;
        this.mensajeVista = 'El proyecto no se ha creado: el identificador y nombre introducidos no son válidos';
      }
    }

    //Chequeamos si el ID existe
    for ( let index = 0; index < this.listaProjects.length; index++ ) {
      var id = this.listaProjects[index]["id"];
      if ( id == this.idNuevo ) {
        noGuardamos = true;
        this.mensajeVista = 'El proyecto no se ha creado: el identificador introducido ya existe';
      }
    };

    var obj = {
      id: this.idNuevo,
      name: this.nombreNuevo
    };
    if ( noGuardamos == false ) {
      projects.push( obj );
      this.mensajeVista = 'El proyecto se ha creado con éxito';
    }
  }

  
}
