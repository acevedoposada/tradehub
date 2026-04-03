import { Component, ViewEncapsulation } from "@angular/core";
import ThIconComponent from "../icon/icon.component";

@Component({
  selector: "th-form-field",
  templateUrl: "./form-field.component.html",
  styleUrl: "./form-field.component.css",
  encapsulation: ViewEncapsulation.None,
  imports: [ThIconComponent]
})
export default class ThFormFieldComponent {}