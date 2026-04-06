import { NgModule } from "@angular/core";

import ThCheckboxComponent from "../checkbox/checkbox.component";
import ThRadioButtonComponent from "../radio/radio.component";
import ThErrorComponent from "../error/error.component";
import ThHintComponent from "../hint/hint.component";

import ThFormFieldComponent from "./form-field.component";
import ThInputDirective from "./input.directive";

const FORM_COMPONENTS = [
  ThFormFieldComponent,
  ThCheckboxComponent,
  ThRadioButtonComponent,
  ThHintComponent,
  ThErrorComponent,
  ThInputDirective
]

@NgModule({
  imports: [...FORM_COMPONENTS],
  exports: [...FORM_COMPONENTS]
})
export default class ThFormFieldModule {}