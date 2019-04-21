import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ProjectsService } from './projects.service';

let projects = environment.projects;

@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {
  public projectsClass = 'content';
  @Input() public filterClass = 'content';
  @Input() public listaProjects: { id: number, name: string }[];
  @Input() public mensajeVista = '';

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.listaProjects = projects;
  }

  public onFiltrar( id2: number ) {

    alert( "vamos a filtrar" );

    let id1:number = 0;

    let filtramos: boolean = false;

    if (id1>id2) {
      this.mensajeVista = 'El identificador inicial ha de ser menor o igual al final';
    }
    
    //Chequeamos si el ID existe
    for ( let index = 0; index < this.listaProjects.length; index++ ) {
      var id = this.listaProjects[index]["id"];
      if ( id == id1 ) {
        filtramos = true;      
      }
      if ( id == id2 ) {
        filtramos = true;        
      }
      if ( filtramos == false ) {
        this.mensajeVista = 'Alguno de los identificadores indicados no es válido';
      }
    };

    if ( filtramos == true ) {
      this.listaProjects =this.projectsService.filtrarProyectos(id1,id2);
    }
  }

  

}
