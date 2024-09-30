import { Component, Input } from '@angular/core';
import { ITaskResponse } from 'src/app/core/interfaces/tasks-team.interface';

@Component({
  selector: 'app-task-project',
  templateUrl: './task-project.component.html',
  styleUrls: ['./task-project.component.scss']
})
export class TaskProjectComponent {
  @Input() taskList: ITaskResponse[] = [];
  displayedColumns: string[] = ['tasks', 'hours', 'percent', 'billableHours'];
  percentTask(billableHours: number, totalHour: number) {
    if (totalHour === 0) return 0;
    return (billableHours / totalHour) * 100;
  }
}
