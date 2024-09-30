import { Component } from '@angular/core';
import { SidebarHeaderComponent } from './components/sidebar-header/sidebar-header.component';
import { SidebarBodyComponent } from './components/sidebar-body/sidebar-body.component';
import { SidebarFooterComponent } from './components/sidebar-footer/sidebar-footer.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [
    SidebarHeaderComponent,
    SidebarBodyComponent,
    SidebarFooterComponent
  ]
})
export class SidebarComponent {

  constructor() { }
}
