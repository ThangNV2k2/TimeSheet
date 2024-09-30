import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionModule
  ]
})
export class ExpansionPanelComponent {
  @Input() title!: string;
  panelOpenState = false;

}
