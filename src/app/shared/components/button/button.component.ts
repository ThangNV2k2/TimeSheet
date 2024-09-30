import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn' | 'basic' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: true | false = false;
  @HostBinding('class.mat-button-base') get isBasicButton(): boolean {
    return false;
  }

  @HostBinding('class') get buttonClasses(): string {
    const classes = [];
    classes.push(`mat-${this.color}`);
    if (this.size === 'small')
      classes.push('h-[36px] min-w-[64px]');
    else if (this.size === 'large')
      classes.push('h-[50px] min-w-[138px]');
    return classes.join(' ');
  }


}
