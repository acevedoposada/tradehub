import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import ThIconComponent from "@app/components/icon/icon.component";
import ProvidersService from "@app/core/services/providers.service";
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
  providerService = inject(ProvidersService)

  filtersForm = new FormGroup({
    qualification: new FormControl('')
  })

  cleanForm() {
    this.filtersForm.reset()
  }
}