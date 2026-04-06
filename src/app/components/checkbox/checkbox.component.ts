import { Component, forwardRef, signal } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import ThIconComponent from "../icon/icon.component";

@Component({
  selector: "th-checkbox",
  templateUrl: "./checkbox.component.html",
  styleUrls: ["./checkbox.component.css"],
  imports: [ThIconComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ThCheckboxComponent),
      multi: true 
    }
  ]
})
export default class ThCheckboxComponent implements ControlValueAccessor {
  checked = signal(false)
  disabled = signal(false)

  private onChangeCb: (value: boolean) => void = () => {}
  protected onTouchedCb: () => void = () => {}

  onToggle(event: Event) {
    if (this.disabled()) return;
    const inputElement = event.target as HTMLInputElement
    const isChecked = inputElement.checked

    this.checked.set(isChecked)
    this.onChangeCb(isChecked)
  }

  writeValue(value: boolean) {
    this.checked.set(!!value)
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}