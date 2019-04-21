import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  public listarProyectos = (): { id: number, name: string }[] => environment.projects;
  
  public filtrarProyectos = ( id1: number, id2: number ): { id: number, name: string }[] => {
    alert( "vamos a filtrar en servicio" );

    let listaProjectsFiltrada: { id: number, name: string }[];

    for ( let index = id1; index <= id2; index++ ) {
      var id = environment.projects[index]["id"];
      var name = environment.projects[index]["name"];

      var obj = {
        id: id,
        name: name
      };

      listaProjectsFiltrada.push( obj );
    }

    return listaProjectsFiltrada;
  };
  
  


}
