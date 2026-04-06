import { Component, effect, ElementRef, forwardRef, input, signal, viewChild } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "th-radio",
  templateUrl: "./radio.component.html",
  styleUrl: "./radio.component.css",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ThRadioButtonComponent),
      multi: true
    }
  ]
})
export default class ThRadioButtonComponent implements ControlValueAccessor {
  value = input.required<string | number>()
  name = input.required<string>()

  radioInput = viewChild<ElementRef<HTMLInputElement>>('radioInput')

  disabled = signal(false);

  private _internalChecked = signal(false)

  private onChangeCb: (value: any) => void = () => {};
  protected onTouchedCb: () => void = () => {};

  constructor() {
    effect(() => {
      const inputEl = this.radioInput()
      if (inputEl) {
        inputEl.nativeElement.checked = this._internalChecked()
      }
    })
  }

  onSelect(event: Event): void {
    if (this.disabled()) {
      event.preventDefault()
      return;
    }
    
    this.onChangeCb(this.value());
    this.onTouchedCb()
  }

  writeValue(formValue: any): void {
    const isChecked = formValue?.toString() === this.value?.().toString()
    this._internalChecked.set(isChecked)

    const inputEl = this.radioInput();
    if (inputEl) {
      inputEl.nativeElement.checked = isChecked;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled)
  }
  
}