import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ETheme } from 'src/app/core/enums/theme.enums';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatMenuModule
  ],
})
export class HeaderComponent {

  constructor(private overlayContainer: OverlayContainer) { }
  setTheme(theme: string) {
    this.overlayContainer.getContainerElement().classList.remove(ETheme.PRIMARY, ETheme.ACCENT, ETheme.TERTIARY);
    this.overlayContainer.getContainerElement().classList.add(theme);
    document.body.classList.remove(ETheme.PRIMARY, ETheme.ACCENT, ETheme.TERTIARY);
    document.body.classList.add(theme);
  }
}
