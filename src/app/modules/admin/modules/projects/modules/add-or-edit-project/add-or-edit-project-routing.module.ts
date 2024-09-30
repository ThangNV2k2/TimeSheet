import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditProjectComponent } from './add-or-edit-project.component';
import { GeneralComponent } from './component/general/general.component';
import { TeamComponent } from './component/team/team.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { NotificationComponent } from './component/notification/notification.component';

const routes: Routes = [

  {
    path: '', component: AddOrEditProjectComponent, children: [
      { path: 'general', component: GeneralComponent },
      { path: 'team', component: TeamComponent },
      { path: 'tasks', component: TasksComponent },
      { path: 'notification', component: NotificationComponent },
    ]
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: []
})
export class AddOrEditProjectRoutingModule { }
