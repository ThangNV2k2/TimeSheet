import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { StrongContentComponent } from '../../shared/components/strong-content/strong-content.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeaderComponent,
    SidebarComponent,
    StrongContentComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
