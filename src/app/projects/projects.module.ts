import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';
import { InterceptorService } from './projects/interceptor.service';
import { NewProjectFormComponent } from './projects/newproject/new-project-form/new-project-form.component';
import { NewprojectComponent } from './projects/newproject/newproject.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsService } from './projects/projects.service';
import { ViewerProjectFormComponent } from './projects/viewerproject/viewer-project-form/viewer-project-form.component';
import { ViewerprojectComponent } from './projects/viewerproject/viewerproject.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ViewerprojectComponent,
    NewprojectComponent,
    ProjectsListComponent,
    ViewerProjectFormComponent,
    NewProjectFormComponent,
    FilterProjectsFormComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [
    ProjectsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class ProjectsModule {}
