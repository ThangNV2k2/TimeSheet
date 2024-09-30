import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProjectResponse } from '../../../../../../core/interfaces/projects.interface';
import { ProjectApiService } from '../../services/project-api.service';
import { ProjectService } from '../../services/project.service';
import { Subscription, combineLatest, debounceTime, switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit, OnDestroy {
  projectList: Map<string, IProjectResponse[]> = new Map();
  projectListRefresh!: Subscription;
  loading: boolean = false;
  constructor(private projectService: ProjectService, private projectApiService: ProjectApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const status = params['status'] || '';
      const search = params['search'] || '';
      this.projectService.filter$.next({
        status,
        search
      });
    });

    this.projectListRefresh = combineLatest([this.projectService.refreshProjectList$, this.projectService.filter$]).pipe(
      debounceTime(300),
      tap(() => this.loading = true),
      switchMap(([, payload]) => this.projectApiService.getAllProjects(payload))
    )
      .subscribe({
        next: (res) => {
          if (res?.result) {
            this.updateProjectList(res.result);
          }
          this.loading = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.projectListRefresh.unsubscribe();
  }

  private updateProjectList(projects: IProjectResponse[]): void {
    this.projectList.clear();
    projects.forEach(p => {
      const existingProjects = this.projectList.get(p.customerName);
      if (existingProjects) {
        existingProjects.push(p);
      } else {
        this.projectList.set(p.customerName, [p]);
      }
    });
  }
}
