import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private urlProjectsApi = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor(private httpClient: HttpClient) {}

  public listarProyectos() {
    return this.httpClient.get(this.urlProjectsApi);
  }

  public numProyectos() {
    return this.httpClient.get(this.urlProjectsApi).pipe(map((proyectos: any) => proyectos.length));
  }

  public filtrarProyecto(filtro: any) {
    return this.httpClient
      .get(this.urlProjectsApi)
      .pipe(map((projects: any) => projects.filter(project => project.name.toLowerCase().includes(filtro.name.toLowerCase()))));
  }

  public creaProyecto(project: any) {
    return this.httpClient.post(this.urlProjectsApi, project).pipe(map((projectCreado: any) => projectCreado._id));
  }

  public obtieneProyecto(id: number) {
    return this.httpClient.get(this.urlProjectsApi).pipe(map((projects: any) => projects.filter(project => project._id == id)));
  }
}
