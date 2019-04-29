import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from '../models/project';
import { Proyecto } from '../models/proyecto';



@Injectable( {
  providedIn: 'root'
} )



export class ProjectsService {
  private urlProjectsApi = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor( private httpClient: HttpClient ) { }


  convierteParaVista( projects: Project[] ): Proyecto[] {
    let proyectos: Proyecto[] = [];

    if ( projects != null ) {
      projects.forEach( p => {
        let proyecto: Proyecto = { id: null, name: '' };
        proyecto.id = p['_id'];
        proyecto.name = p['name'];
      } );
    }
    return proyectos;

  }

  public listarProyectos(): Observable<Proyecto[]> {
    return this.httpClient.get<Project[]>( this.urlProjectsApi ).pipe( map( this.convierteParaVista ) );
  }

  public numProyectos() {
    return this.httpClient.get( this.urlProjectsApi ).pipe( map( ( proyectos: any ) => proyectos.length ) );
  }

  public filtrarProyecto( filtro: any ): Observable<Proyecto[]> {
    let projects: any = this.httpClient.get( this.urlProjectsApi ).pipe( map( ( proyectos: any ) => proyectos.filter( project => project.name.toLowerCase().includes( filtro.name.toLowerCase() ) ) ) );
    return Observable.create( this.convierteParaVista( projects ) );
  }

  public creaProyecto( proyecto: any ) {

    let project: Project = { _id: null, name: '' };

    if ( proyecto != null ) {
      project._id = proyecto.id;
      project.name = proyecto.name

    }
    return this.httpClient.post<Project>( this.urlProjectsApi, project );
  }

}
