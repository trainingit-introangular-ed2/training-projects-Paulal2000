<<<<<<< HEAD
import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ProjectsService } from './projects.service';
=======
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
>>>>>>> 161a7b4616de2911258995cd1bf64d25d2a1914a

let projects = environment.projects;

@Component( {
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
} )
export class ProjectsComponent implements OnInit {
  public projectsClass = 'content';
<<<<<<< HEAD
  @Input() public filterClass = 'content';
  @Input() public listaProjects: { id: number, name: string }[];
  @Input() public mensajeVista = '';

  constructor(private projectsService: ProjectsService) { }
=======
  public listaClass = 'listaProyectos';
  public idSelected: number = -1;
  public listaProjects: { id: number, name: string }[];

  constructor() { }
>>>>>>> 161a7b4616de2911258995cd1bf64d25d2a1914a

  ngOnInit() {
    this.listaProjects = projects;
  }

<<<<<<< HEAD
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

  
=======
>>>>>>> 161a7b4616de2911258995cd1bf64d25d2a1914a

}
