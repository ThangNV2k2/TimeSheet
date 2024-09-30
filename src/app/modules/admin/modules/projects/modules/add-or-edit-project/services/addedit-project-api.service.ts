import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { IAddOrEditProjectRequest, IAddOrEditProjectResponse, IBranchesResponse, ICustomerResponse, ICustomerSaveRequest, ITasksResponse, IUserNotPaddingResponse } from 'src/app/core/interfaces/add-edit-project.interface';
import { IBaseResponse } from 'src/app/core/interfaces/base-response.interface';

@Injectable()
export class AddeditProjectApiService {

  constructor(private apiService: ApiService) { }

  getAllTasks() {
    return this.apiService.get<IBaseResponse<ITasksResponse[]>>('api/services/app/Task/GetAll');
  }

  getUsers() {
    return this.apiService.get<IBaseResponse<IUserNotPaddingResponse[]>>('api/services/app/User/GetUserNotPagging');
  }

  getAllBranches(isAll: boolean) {
    return this.apiService.get<IBaseResponse<IBranchesResponse[]>>('api/services/app/Branch/GetAllBranchFilter', { isAll: isAll.toString() });
  }

  getAllCustomers() {
    return this.apiService.get<IBaseResponse<ICustomerResponse[]>>('api/services/app/Customer/GetAll');
  }

  saveCustomer(customer: ICustomerSaveRequest) {
    return this.apiService.post<IBaseResponse<ICustomerResponse>>('api/services/app/Customer/Save', customer);
  }

  saveProject(project: IAddOrEditProjectResponse | IAddOrEditProjectRequest) {
    return this.apiService.post('api/services/app/Project/Save', project);
  }

  getProject(projectId: string) {
    return this.apiService.get<IBaseResponse<IAddOrEditProjectResponse>>('api/services/app/Project/Get', { input: projectId });
  }
}
