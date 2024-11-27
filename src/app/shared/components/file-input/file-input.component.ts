import { Component, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-file-input',
  standalone: true,
  imports: [SvgIconComponent, NotificationComponent],
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true,
    },
  ],
})
export class FileInputComponent implements ControlValueAccessor {
  public value: File | null = null;
  public imageUrl: string | null = null;
  public notificationMessage: string | null = null;
  @ViewChild('notification') notificationComponent!: NotificationComponent;

  writeValue(value: File | null): void {
    this.value = value;
  }

  registerOnChange(fn: (value: File | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type.startsWith('image/')) {
        this.value = file;
        this.imageUrl = URL.createObjectURL(file);
        this.onChange(this.value);
      } else {
        input.value = '';
        this.showWarningNotification();
      }
    } else {
      this.value = null;
      this.imageUrl = null;
      this.onChange(this.value);
    }
  }

  private onChange: (value: File | null) => void = () => {};
  protected onTouched: () => void = () => {};

  showWarningNotification(): void {
    this.notificationComponent.showNotification(
      'Будьте внимательны!',
      'warning',
    );
  }
}
