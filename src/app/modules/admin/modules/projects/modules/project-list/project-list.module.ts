import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import { TeamProjectComponent } from './components/project-view/components/team-project/team-project.component';
import { TaskProjectComponent } from './components/project-view/components/task-project/task-project.component';
@NgModule({
  declarations: [
    ProjectListComponent,
    TeamProjectComponent,
    TaskProjectComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ProjectListModule { }
