import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from 'src/app/modules/authenticate/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isLoggedIn().pipe(
      tap((isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigate(['/admin/projects']);
        }
      }),
      map((isLoggedIn) => !isLoggedIn)
    );
  }
}
