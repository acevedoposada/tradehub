import { Component, computed, inject, input } from "@angular/core";
import ThFormFieldComponent from "../form-field/form-field.component";

@Component({
  selector: "th-error",
  templateUrl: "./error.component.html",
  styleUrl: "./error.component.css",
})
export default class ThErrorComponent {
  private parent = inject(ThFormFieldComponent)

  errorName = input<string>("", { alias: 'error-name' })

  shouldShow = computed(() => {
    const control = this.parent.control()
    const isTouched = !!(control?.invalid && (control?.touched || control?.dirty));

    if (!isTouched) return false;

    return this.errorName() 
      ? control?.hasError(this.errorName()) 
      : true;
  })
}