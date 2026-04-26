import { Component, computed, contentChild, input } from "@angular/core";
import ThIconComponent from "@components/icon/icon.component";
import ThInputDirective from "./input.directive";
import { Validators } from "@angular/forms";

@Component({
  selector: "th-form-field",
  templateUrl: "./form-field.component.html",
  styleUrl: "./form-field.component.css",
  imports: [ThIconComponent],
  host: {
    '[class.has-icon]': '!!icon()',
    '[class.th--tonal]': 'appeareance() === "tonal"',
    '[class.th--error]': 'control()?.invalid && (control()?.touched || control()?.dirty)'
  }
})
export default class ThFormFieldComponent {
  icon = input<string | null>(null);
  appeareance = input<'default' | 'tonal'>('default')
  label = input<string>()

  private inputField = contentChild(ThInputDirective);

  control = computed(() => this.inputField()?.ngControl?.control)

  readonly isRequired = computed(() => {
    const ctrl = this.control()
    if (!ctrl) return false
    return ctrl.hasValidator(Validators.required)
  })

  readonly isSelect = computed(() => {
    const element = this.inputField()?.elementRef?.nativeElement as HTMLSelectElement
    return element?.tagName?.toLowerCase?.() === 'select'
  })
}