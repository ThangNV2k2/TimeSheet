import { Component, OnInit } from '@angular/core';
import { AddeditProjectFormService } from './services/addedit-project-form.service';
import { ERouteLabels } from 'src/app/core/enums/route-labels.enums';
import { ActivatedRoute, Router } from '@angular/router';
import { AddeditProjectApiService } from './services/addedit-project-api.service';
import Swal from 'sweetalert2';
import { ProjectService } from '../../services/project.service';
import { FormGroup } from '@angular/forms';
import { IProjectForm } from 'src/app/core/interfaces/add-edit-project-form.interface';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


@Component({
  selector: 'app-add-or-edit-project',
  templateUrl: './add-or-edit-project.component.html',
  styleUrls: ['./add-or-edit-project.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class AddOrEditProjectComponent implements OnInit {
  projectId: number | undefined;
  projectForm!: FormGroup<IProjectForm>;
  routeLabel = [
    { label: ERouteLabels.General, routerLink: 'general' },
    { label: ERouteLabels.Team, routerLink: 'team' },
    { label: ERouteLabels.Tasks, routerLink: 'tasks' },
    { label: ERouteLabels.Notification, routerLink: 'notification' }
  ];
  constructor(
    private projectFormService: AddeditProjectFormService,
    private projectApiService: AddeditProjectApiService,
    private activatedRoute: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params?.['id'];
    this.projectId = id;
    if (id) {
      this.projectApiService.getProject(id).subscribe((res) => {
        this.projectFormService.buildProjectForm(res?.result);
        this.projectForm = this.projectFormService.projectForm;
      });
    }
    else {
      this.projectFormService.buildProjectForm();
      this.projectForm = this.projectFormService.projectForm;
    }
  }
  canNavigate(index: number): boolean {
    if (index === 0) return true;
    if (index === 1 && this.projectFormService?.projectForm?.valid) return true;
    if (index === 2 || index === 3) {
      if (this.projectFormService?.projectForm?.valid && this.teamArrayForm.length !== 0 && !this.teamArrayForm.controls.every(teamControls => teamControls.controls.type.value !== 1)) {
        return true;
      }
    }
    return false;
  }
  get generalForm() {
    return this.projectFormService.getGeneralForm();
  }

  get teamArrayForm() {
    return this.projectFormService.getTeamArrayForm();
  }

  disabledSubmit() {
    if (this.projectFormService.projectForm.invalid) {
      return true;
    }
    return false;
  }

  onSave() {
    if (this.teamArrayForm.length === 0) {
      Swal.fire({
        icon: 'error',
        title: '<strong>Please add at least one team member</strong>',
        confirmButtonText: "OK",
        confirmButtonColor: '#7cd1f9',
      });
      return;
    }
    if (this.teamArrayForm.controls.every(teamControls => teamControls.controls.type.value !== 1)) {
      Swal.fire({
        icon: 'error',
        title: '<strong>Project must have a PM!</strong>',
        confirmButtonText: "OK",
        confirmButtonColor: '#7cd1f9',
      });
      return;
    }

    const project = this.projectFormService.getValueProjectForm();
    this.projectApiService.saveProject(project).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          text: !this.projectId ? 'Create project successfully' : 'Update project successfully',
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 2000,
        });
        this.projectService.refreshProjectList$.next(true);
        this.router.navigate(['admin/projects']);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          text: err.error.error.message,
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  }
}
