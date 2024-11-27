import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [NgClass],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  @Input() message: string | null = null;
  @Input() type: 'success' | 'error' | 'warning' = 'success';

  get notificationClass(): string {
    return `notification ${this.type} ${this.message ? 'show' : ''}`;
  }

  showNotification(
    message: string,
    type: 'success' | 'error' | 'warning',
  ): void {
    this.message = message;
    this.type = type;
    setTimeout(() => {
      this.message = null;
    }, 3000);
  }
}
