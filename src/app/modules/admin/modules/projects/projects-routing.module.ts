import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';


const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'new', loadChildren: () => import('./modules/add-or-edit-project/add-or-edit-project.module').then(m => m.AddOrEditProjectModule) },
  { path: 'edit/:id', loadChildren: () => import('./modules/add-or-edit-project/add-or-edit-project.module').then(m => m.AddOrEditProjectModule) },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
