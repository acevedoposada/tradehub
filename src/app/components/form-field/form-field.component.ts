import { Component, computed, contentChild, input } from "@angular/core";
import ThIconComponent from "@components/icon/icon.component";
import ThInputDirective from "./input.directive";

@Component({
  selector: "th-form-field",
  templateUrl: "./form-field.component.html",
  styleUrl: "./form-field.component.css",
  imports: [ThIconComponent],
  host: {
    '[class.has-icon]': '!!icon()',
    '[class.th--tonal]': 'appeareance() === "tonal"',
  }
})
export default class ThFormFieldComponent {
  icon = input<string | null>(null);
  appeareance = input<'default' | 'tonal'>('default')

  private inputField = contentChild(ThInputDirective);

  control = computed(() => this.inputField()?.ngControl?.control)
}