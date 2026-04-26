import { Component, computed, inject, input } from "@angular/core";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { EMPTY, switchMap } from "rxjs";

import ThFormFieldComponent from "../form-field/form-field.component";

@Component({
  selector: "th-error",
  templateUrl: "./error.component.html",
  styleUrl: "./error.component.css",
})
export default class ThErrorComponent {
  private parent = inject(ThFormFieldComponent)

  errorName = input<string>("", { alias: 'error-name' })

  private statusSignal = toSignal(toObservable(this.parent.control).pipe(
    switchMap(control => control ? control.events : EMPTY)
  ))

  shouldShow = computed(() => {
    this.statusSignal()

    const control = this.parent.control()
    if (!control) return false;

    const isInvalid = control.invalid;
    const isTouchedOrDirty = control.touched || control.dirty

    if (!(isInvalid && isTouchedOrDirty)) return false;

    return this.errorName() 
      ? control.hasError(this.errorName()) 
      : true;
  })
}