import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewprojectComponent } from './projects/newproject/newproject.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerprojectComponent } from './projects/viewerproject/viewerproject.component';

const routes: Routes = [{
  path: '',
  component: ProjectsComponent
},
{
  path: 'project/new', component: NewprojectComponent
},
{
  path: 'project/:id', component: ViewerprojectComponent
}
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class ProjectsRoutingModule { }
