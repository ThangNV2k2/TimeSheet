import { Component, Input } from '@angular/core';
import { IUserResponse } from 'src/app/core/interfaces/tasks-team.interface';

@Component({
  selector: 'app-team-project',
  templateUrl: './team-project.component.html',
  styleUrls: ['./team-project.component.scss']
})
export class TeamProjectComponent {

  @Input() userList: IUserResponse[] = [];
  displayedColumns: string[] = ['name', 'hours', 'percent', 'billableHours'];
  constructor() { }

  percentTask(billableHours: number, totalHour: number) {
    if (totalHour === 0) return 0;
    return (billableHours / totalHour) * 100;
  }
}
