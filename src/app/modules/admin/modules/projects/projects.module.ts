import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectListComponent } from './modules/project-list/project-list.component';
import { StrongContentComponent } from '../../../../shared/components/strong-content/strong-content.component';
import { ProjectItemComponent } from './modules/project-list/components/project-item/project-item.component';
import { ExpansionPanelComponent } from 'src/app/shared/components/expansion-panel/expansion-panel.component';
import { DateFormatPipe } from 'src/app/shared/pipes/date-format.pipe';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderProjectComponent } from './component/header-project/header-project.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { RangeFormatPipe } from 'src/app/shared/pipes/range-format.pipe';
import { ProjectViewComponent } from './modules/project-list/components/project-view/project-view.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TeamProjectComponent } from './modules/project-list/components/project-view/components/team-project/team-project.component';
import { TaskProjectComponent } from './modules/project-list/components/project-view/components/task-project/task-project.component';
import { PercentBarComponent } from './component/percent-bar/percent-bar.component';
import { MatTableModule } from '@angular/material/table';
import { ConvertMinuteToHoursPipe } from 'src/app/shared/pipes/convert-minute-to-hours.pipe';
import { AddOrEditProjectComponent } from './modules/add-or-edit-project/add-or-edit-project.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectListComponent,
    ProjectItemComponent,
    ProjectViewComponent,
    DateFormatPipe,
    HeaderProjectComponent,
    RangeFormatPipe,
    TeamProjectComponent,
    TaskProjectComponent,
    PercentBarComponent,
    ConvertMinuteToHoursPipe,
    AddOrEditProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    MatIconModule,
    ButtonComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    StrongContentComponent,
    ExpansionPanelComponent,
    ScrollingModule,
    MatButtonModule,
    MatMenuModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatTableModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatStepperModule,
    CdkStepperModule
  ],
  bootstrap: [ProjectsComponent]
})
export class ProjectsModule { }
