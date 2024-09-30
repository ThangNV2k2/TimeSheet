import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './component/general/general.component';
import { TeamComponent } from './component/team/team.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { NotificationComponent } from './component/notification/notification.component';
import { AddOrEditProjectRoutingModule } from './add-or-edit-project-routing.module';
import { TextareaComponent } from '../../../../../../shared/components/textarea/textarea.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { AddClientComponent } from './component/add-client/add-client.component';
import { MatDialogModule } from '@angular/material/dialog';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { FilterMemberPipe } from './pipe/filter-member.pipe';
import { StrongContentComponent } from 'src/app/shared/components/strong-content/strong-content.component';
import { MatDividerModule } from '@angular/material/divider';
import { FilterClientPipe } from './pipe/filter-client.pipe';
import { AddeditProjectFormService } from './services/addedit-project-form.service';
import { AddeditProjectApiService } from './services/addedit-project-api.service';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    GeneralComponent,
    TeamComponent,
    TasksComponent,
    NotificationComponent,
    TextareaComponent,
    AddClientComponent,
    FilterMemberPipe,
    FilterClientPipe,
  ],
  imports: [
    CommonModule,
    AddOrEditProjectRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    ButtonComponent,
    MatDialogModule,
    InputComponent,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatRadioModule,
    StrongContentComponent,
    MatDividerModule,
    MatStepperModule,
    MatButtonModule,
    CdkStepperModule
  ],
  providers: [AddeditProjectFormService, AddeditProjectApiService]
})
export class AddOrEditProjectModule { }