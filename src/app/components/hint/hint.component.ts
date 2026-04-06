import { Component, computed, inject, input } from "@angular/core";
import ThFormFieldComponent from "../form-field/form-field.component";

@Component({
  selector: "th-hint",
  templateUrl: "./hint.component.html",
  styleUrl: "./hint.component.css",
})
export default class ThHintComponent {
  private parent = inject(ThFormFieldComponent)

  align = input<("start" | "end")>("start")

  shouldShow = computed(() => {
    const control = this.parent.control()
    const hasErrorVisible = !!(control && control.invalid && (control.touched || control.dirty))
    return !hasErrorVisible
  })
}