import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-strong-content',
  templateUrl: './strong-content.component.html',
  styleUrls: ['./strong-content.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class StrongContentComponent {
  @Input() color!: 'warning' | 'primary' | 'success' | 'error' | 'info' | 'default';
  @Input() size!: 'xs' | 'small' | 'medium' | 'large' | 'default';

  @HostBinding('class') get classes(): string {
    const colorClass = this.getColorClass();
    const sizeClass = this.getSizeClass();
    return `${colorClass} ${sizeClass} ${this.stylesClass()}`;
  }
  private getColorClass() {
    if (this.color === 'warning')
      return 'text-whiteColor bg-warning';
    else if (this.color === 'primary')
      return 'text-whiteColor bg-primary';
    else if (this.color === 'success')
      return 'text-whiteColor bg-success';
    else if (this.color === 'error')
      return 'text-whiteColor bg-error';
    else if (this.color === 'info')
      return 'text-whiteColor bg-info';
    else
      return 'text-gray font-normal';
  }

  private getSizeClass() {
    if (this.size === 'xs')
      return 'text-[11px]';
    else if (this.size === 'small')
      return 'text-xs';
    else if (this.size === 'medium')
      return 'text-sm';
    else
      return 'text-xs';
  }
  private stylesClass() {
    return 'px-[5px] py-[3px] ml-[5px] rounded-[10px] font-medium';
  }
}