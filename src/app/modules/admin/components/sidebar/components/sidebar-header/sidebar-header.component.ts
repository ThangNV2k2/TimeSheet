import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { IUserInfomation } from 'src/app/core/interfaces/login.interface';
import { AuthApiService } from 'src/app/core/services/auth-api.service';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
  standalone: true,
  imports: [MatIconModule, CommonModule, MatMenuModule]
})
export class SidebarHeaderComponent implements OnInit {
  user!: IUserInfomation | null;
  constructor(private authApiService: AuthApiService, private router: Router) { }

  ngOnInit(): void {
    this.authApiService.getLoginInformations().subscribe((res) => {
      this.user = res?.result?.user;
    });
  }

  logout() {
    localStorage.removeItem('accessToken');
    sessionStorage.removeItem('accessToken');
    this.router.navigate(['/auth/login']);
  }

}
