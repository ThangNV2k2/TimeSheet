import { Injectable } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { ILoginGoogleRequest, ILoginRequest } from '../../../core/interfaces/login.interface';
import { AuthApiService } from '../../../core/services/auth-api.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private authApiService: AuthApiService, private router: Router) { }

  login(loginRequest: ILoginRequest) {
    return this.authApiService.login(loginRequest).pipe(
      tap((response) => {
        const { result: { accessToken } } = response;

        if (loginRequest.rememberClient)
          localStorage.setItem('accessToken', accessToken);
        else
          sessionStorage.setItem('accessToken', accessToken);
      }),
    );
  }
  loginWithGoogle(loginGoogleRequest: ILoginGoogleRequest) {
    return this.authApiService.loginWithGoogle(loginGoogleRequest).pipe(
      tap((response) => {
        const { result: { accessToken } } = response;
        sessionStorage.setItem('accessToken', accessToken);
      }),
    );
  }
  getLoginInformations() {
    return this.authApiService.getLoginInformations().pipe(
      map((res) => {
        return res?.result?.user;
      })
    );
  }
  isLoggedIn(): Observable<boolean> {
    if (localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken')) {
      return this.authApiService.getLoginInformations().pipe(
        map((res) => {
          return !!res?.result?.user;
        }),
      );
    }
    return of(false);
  }
  logout() {
    localStorage.removeItem('accessToken');
    sessionStorage.removeItem('accessToken');
    this.router.navigate(['/auth/login']);
  }
}
