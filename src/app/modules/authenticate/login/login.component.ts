import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/authenticate/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})


export class LoginComponent {
  matcher = new MyErrorStateMatcher();
  hidePassword = true;
  loginForm: FormGroup = this.formBuilder.group({
    userNameOrEmailAddress: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    rememberClient: [false]
  });
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private socialAuth: SocialAuthService) { }

  loginWithGoogle() {
    this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then((user) => {
      const googleToken = user.idToken;
      const secretCode = 'GOCSPX - JqXYJ5rf052PwSq8fZo_ZqbjWJV4';
      this.authService.loginWithGoogle({ googleToken, secretCode }).subscribe({
        next: () => {
          this.router.navigate(['/admin/projects']);
        },
        error: () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid username or password!",
          });
        }
      });
    });
  }

  onSubmitLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['/admin/projects']);
      },
      error: () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid username or password!",
        });
      }
    });
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}