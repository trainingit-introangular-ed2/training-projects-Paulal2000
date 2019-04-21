import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectComponent } from './projects/viewerproject/viewerproject.component';
import { NewprojectComponent } from './projects/newproject/newproject.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ViewerProjectFormComponent } from './projects/viewerproject/viewer-project-form/viewer-project-form.component';
import { NewProjectFormComponent } from './projects/newproject/new-project-form/new-project-form.component';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';

@NgModule({
  declarations: [ProjectsComponent, ViewerprojectComponent, NewprojectComponent, ProjectsListComponent, ViewerProjectFormComponent, NewProjectFormComponent, FilterProjectsFormComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule
  ]
})
export class ProjectsModule { }
