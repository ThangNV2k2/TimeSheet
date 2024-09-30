import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectApiService } from '../../services/project-api.service';
import { IQuantityProjectResponse } from '../../../../../../core/interfaces/projects.interface';
import { EStatusFilter, EStatusFilterQueryParams } from '../../../../../../core/enums/status-filter.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-header-project',
  templateUrl: './header-project.component.html',
  styleUrls: ['./header-project.component.scss']
})
export class HeaderProjectComponent implements OnInit, OnDestroy {

  quantityProjects: IQuantityProjectResponse[] = [];
  selectFilters = [EStatusFilter.ACTIVE, EStatusFilter.INACTIVE, EStatusFilter.ALL];
  selectedFilter: string = EStatusFilter.ALL;
  searchTerm: string = '';
  destroy$ = new Subject<void>();
  constructor(private projectApiService: ProjectApiService, private projectService: ProjectService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projectApiService.getQuantityProjects()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.quantityProjects = res?.result;
        this.quantityProjects.push({ quantity: this.quantityProjects[0]?.quantity + this.quantityProjects[1]?.quantity, status: 2 });
      });

    this.projectService.filter$
      .pipe(takeUntil(this.destroy$))
      .subscribe((filter) => {
        const status = filter.status;
        if (status === EStatusFilterQueryParams.ACTIVE) {
          this.selectedFilter = EStatusFilter.ACTIVE;
        }
        else if (status === EStatusFilterQueryParams.INACTIVE) {
          this.selectedFilter = EStatusFilter.INACTIVE;
        }
        else {
          this.selectedFilter = EStatusFilter.ALL;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  handleFilter(): void {
    const filter: string = this.selectedFilter === EStatusFilter.ACTIVE ? EStatusFilterQueryParams.ACTIVE :
      this.selectedFilter === EStatusFilter.INACTIVE ? EStatusFilterQueryParams.INACTIVE :
        EStatusFilterQueryParams.ALL;
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        status: filter,
        search: this.searchTerm,
      },
      queryParamsHandling: 'merge',
    });
  }

  newProject() {
    this.router.navigate(['/admin/projects/new/general']);
  }
}
