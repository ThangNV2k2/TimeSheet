import { Injectable } from '@angular/core';
import { IBaseResponse } from 'src/app/core/interfaces/base-response.interface';
import { IProjectFilterParams, IProjectResponse, IQuantityProjectResponse } from '../../../../../core/interfaces/projects.interface';
import { AdminModule } from '../../../admin.module';
import { ApiService } from 'src/app/core/services/api.service';
import { IHttpParams } from 'src/app/core/interfaces/params.interface';
import { ITaskOrTeamRequest, ITaskResponse, IUserResponse } from 'src/app/core/interfaces/tasks-team.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: AdminModule
})
export class ProjectApiService {

  constructor(private apiService: ApiService) { }

  getAllProjects(filter: IProjectFilterParams) {
    const getAllProjectsUrl = 'api/services/app/Project/GetAll';
    const params: IHttpParams = {
      status: filter.status,
      search: filter.search,
    };
    return this.apiService.get<IBaseResponse<IProjectResponse[]>>(getAllProjectsUrl, params);
  }

  getQuantityProjects(): Observable<IBaseResponse<IQuantityProjectResponse[]>> {
    const getQuanlityProjectsUrl = 'api/services/app/Project/GetQuantityProject';
    return this.apiService.get<IBaseResponse<IQuantityProjectResponse[]>>(getQuanlityProjectsUrl);
  }

  deleteProject(id: number): Observable<IBaseResponse<IProjectResponse>> {
    const deleteProjectUrl = 'api/services/app/Project/Delete';
    return this.apiService.delete<IBaseResponse<IProjectResponse>>(deleteProjectUrl, { id: id.toString() });
  }

  activeProject(id: number): Observable<IBaseResponse<IProjectResponse>> {
    const activeProjectUrl = 'api/services/app/Project/Active';
    return this.apiService.post<IBaseResponse<IProjectResponse>>(activeProjectUrl, { id: id.toString() });
  }

  inactiveProject(id: number): Observable<IBaseResponse<IProjectResponse>> {
    const inactiveProjectUrl = 'api/services/app/Project/Inactive';
    return this.apiService.post<IBaseResponse<IProjectResponse>>(inactiveProjectUrl, { id: id.toString() });
  }

  getTeamByProject(teamRequest: ITaskOrTeamRequest): Observable<IBaseResponse<IUserResponse[]>> {
    const getTeamByProjectUrl = 'api/services/app/TimeSheetProject/GetTimeSheetStatisticTeams';
    const params: IHttpParams = {
      projectId: teamRequest.projectId.toString(),
      startDate: teamRequest.startDate,
      endDate: teamRequest.endDate,
    };
    return this.apiService.get<IBaseResponse<IUserResponse[]>>(getTeamByProjectUrl, params);
  }

  getTaskByProject(taskRequest: ITaskOrTeamRequest): Observable<IBaseResponse<ITaskResponse[]>> {
    const getTaskByProjectUrl = 'api/services/app/TimeSheetProject/GetTimeSheetStatisticTasks';
    const params: IHttpParams = {
      projectId: taskRequest.projectId.toString(),
      startDate: taskRequest.startDate,
      endDate: taskRequest.endDate,
    };
    return this.apiService.get<IBaseResponse<ITaskResponse[]>>(getTaskByProjectUrl, params);
  }
}
