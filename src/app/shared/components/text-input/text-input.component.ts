import { Component, forwardRef, input, signal } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-text-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
})
export class TextInputComponent implements ControlValueAccessor {
  public id = input<string>('id');
  public type = input<'text' | 'password'>('text');
  public placeholder = input<string>('');
  public disabled = signal<boolean>(false);
  public value = new FormControl<string>('', Validators.required);

  public writeValue(value: string): void {
    this.value.setValue(value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public onModelChange(value: string) {
    this.onChange(value);
  }

  private onChange: (value: string) => void = () => {};
  protected onTouched = () => {};
}
