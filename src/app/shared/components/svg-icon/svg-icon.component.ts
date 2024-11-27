import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon[icon]',
  standalone: true,
  imports: [],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss',
})
export class SvgIconComponent {
  @Input() className: 'svg-mini' | 'svg-big' = 'svg-mini';
  @Input() icon: string = '';

  public get href() {
    return `/assets/images/${this.icon}.svg#${this.icon}`;
  }
}
