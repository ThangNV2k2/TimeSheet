import { Component } from '@angular/core';
import { AddeditProjectFormService } from '../../services/addedit-project-form.service';
import { ENotificationFormGroup } from 'src/app/core/enums/notification';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  notification = ENotificationFormGroup;
  constructor(private projectFormService: AddeditProjectFormService, private router: Router, private route: ActivatedRoute) { }

  get notificationFormGroup() {
    return this.projectFormService.getNotificationForm();
  }

  backRoute() {
    this.router.navigate(['../tasks',], { relativeTo: this.route });
  }
}
