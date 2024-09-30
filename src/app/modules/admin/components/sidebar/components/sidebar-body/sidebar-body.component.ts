import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { EMenuLabels } from 'src/app/core/enums/menu-lables.enums';
import { MatChipsModule } from '@angular/material/chips';
@Component({
  selector: 'app-sidebar-body',
  templateUrl: './sidebar-body.component.html',
  styleUrls: ['./sidebar-body.component.scss'],
  standalone: true,
  imports: [MatIconModule, CommonModule, RouterModule, MatChipsModule]
})
export class SidebarBodyComponent {

  menuItems = [
    { icon: 'account_box', label: EMenuLabels.MyProfile, routerLink: '/admin/#' },
    { icon: 'group_work', label: EMenuLabels.Admin, routerLink: '/admin/#' },
    { icon: 'assessment', label: EMenuLabels.Projects, routerLink: '/admin/projects' },
    { icon: 'alarm', label: EMenuLabels.MyTimesheets, routerLink: '/admin/#' },
    { icon: 'event_busy', label: EMenuLabels.MyRequest, routerLink: '/admin/#' },
    { icon: 'today', label: EMenuLabels.MyWorking, routerLink: '/admin/#' },
    { icon: 'date_range', label: EMenuLabels.ManageTimesheet, routerLink: '/admin/#' },
    { icon: 'rule', label: EMenuLabels.ManageRequest, routerLink: '/admin/#' },
    { icon: 'access_time', label: EMenuLabels.ManageWorking, routerLink: '/admin/#' },
    { icon: 'groups', label: EMenuLabels.TeamWorking, routerLink: '/admin/#' },
    { icon: 'supervised_user_circle', label: EMenuLabels.TimesheetsMonitoring, routerLink: '/admin/#' },
    { icon: 'event_note', label: EMenuLabels.Retro, routerLink: '/admin/#' },
    { icon: 'rate_review', label: EMenuLabels.ReviewInterns, routerLink: '/admin/#' },
    { icon: 'description', label: EMenuLabels.Report, routerLink: '/admin/#' },
  ];


}
