import { Directive, ElementRef, inject } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: 'input[th-input],textarea[th-input],select[th-input]',
  host: {
    'class': 'th-input',
    '[id]': 'id',
    '[class.is-invalid]': 'ngControl?.invalid && ngControl?.touched',
  }
})
export default class ThInputDirective {
  elementRef = inject(ElementRef)

  ngControl = inject(NgControl, { self: true, optional: true })
  id = `th-input-${Math.random().toString(36).slice(2, 9)}`
}