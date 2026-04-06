import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import ThIconComponent from "@app/components/icon/icon.component";
import ThButtonComponent from "@components/button/button.component";
import ThCardComponent from "@components/card/card.component";
import ThFormFieldModule from "@components/form-field/form-field.module";

@Component({
  selector: "th-providers-filters",
  templateUrl: "./filters.component.html",
  styleUrl: "./filters.component.css",
  imports: [
    ThCardComponent,
    ThIconComponent,
    ThButtonComponent,
    ThFormFieldModule,
    ReactiveFormsModule
  ]
})
export default class ThFiltersComponent {
  filtersForm = new FormGroup({
    qualification: new FormControl('')
  })
}