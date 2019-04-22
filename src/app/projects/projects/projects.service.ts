import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable( {
  providedIn: 'root'
} )
export class ProjectsService {

  constructor() { }

  public listarProyectos = (): { id: number, name: string }[] => environment.projects;

  public filtrarProyecto( filtros: any ) {
    return environment.projects.filter( project => project.name.toLowerCase().includes( filtros.name.toLowerCase() ) );
  }


}
