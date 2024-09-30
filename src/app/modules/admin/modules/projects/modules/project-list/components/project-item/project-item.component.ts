import { Component, Input } from '@angular/core';
import { IProjectResponse } from '../../../../../../../../core/interfaces/projects.interface';
import { ProjectApiService } from '../../../../services/project-api.service';
import Swal from 'sweetalert2';
import { ProjectService } from '../../../../services/project.service';
import { EProjectTypeId, EProjectTypeList } from 'src/app/core/enums/project-type.enums';
import { MatDialog } from '@angular/material/dialog';
import { ProjectViewComponent } from '../project-view/project-view.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent {
  mapProjectType: Map<number, string> = new Map([
    [EProjectTypeId.TM, EProjectTypeList.TM],
    [EProjectTypeId.FF, EProjectTypeList.FF],
    [EProjectTypeId.NB, EProjectTypeList.NB],
    [EProjectTypeId.ODC, EProjectTypeList.ODC],
    [EProjectTypeId.Product, EProjectTypeList.Product],
    [EProjectTypeId.Training, EProjectTypeList.Training],
    [EProjectTypeId.NoSalary, EProjectTypeList.NoSalary]
  ]);
  @Input() project!: IProjectResponse;

  constructor(private projectApiService: ProjectApiService, private projectService: ProjectService, private dialog: MatDialog, private router: Router) { }

  deleteProject() {
    Swal.fire({
      title: "Are you sure?",
      text: `Delete project: ${this.project.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#67C23A",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.projectApiService.deleteProject(this.project.id).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              text: 'Deleted project successfully',
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              timer: 2000,
            });
            this.projectService.refreshProjectList$.next(true);
          },
          error: () => {
            Swal.fire({
              icon: 'error',
              text: 'You can not delete this project',
              toast: true,
              position: 'bottom-end',
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      }
    });
  }

  viewProject() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const dialogWidth = width >= 1024 ? '800px' : '80vw';
    this.dialog.open(ProjectViewComponent, {
      data: {
        projectId: this.project.id,
      }, height: '100%', width: dialogWidth
    });
  }

  editProject() {
    this.router.navigate([`/admin/projects/edit/${this.project.id}/general`]);
  }
}
