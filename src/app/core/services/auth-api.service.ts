import { Injectable } from '@angular/core';
import { ILoginGoogleRequest, ILoginInformations, ILoginRequest, ILoginResponse } from '../interfaces/login.interface';
import { IBaseResponse } from '../interfaces/base-response.interface';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private apiService: ApiService) { }

  login(loginRequest: ILoginRequest): Observable<IBaseResponse<ILoginResponse>> {
    return this.apiService.post<IBaseResponse<ILoginResponse>>('api/TokenAuth/Authenticate', loginRequest);
  }

  loginWithGoogle(loginGoogleRequest: ILoginGoogleRequest): Observable<IBaseResponse<ILoginResponse>> {
    return this.apiService.post<IBaseResponse<ILoginResponse>>('api/TokenAuth/GoogleAuthenticate', loginGoogleRequest);
  }

  getLoginInformations(): Observable<IBaseResponse<ILoginInformations>> {
    return this.apiService.get<IBaseResponse<ILoginInformations>>('api/services/app/Session/GetCurrentLoginInformations');
  }
}
