import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProjectFilterParams } from '../../../../../core/interfaces/projects.interface';
import { AdminModule } from '../../../admin.module';
import { EStatusFilterQueryParams } from 'src/app/core/enums/status-filter.enum';

@Injectable({
  providedIn: AdminModule
})
export class ProjectService {

  refreshProjectList$ = new BehaviorSubject<boolean>(true);
  filter$ = new BehaviorSubject<IProjectFilterParams>({
    status: EStatusFilterQueryParams.ACTIVE,
    search: ''
  });

}
