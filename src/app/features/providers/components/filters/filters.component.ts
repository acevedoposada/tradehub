import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators 
} from "@angular/forms";
import { Component, effect, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { debounceTime, map, startWith } from "rxjs";

import ProvidersService from "@app/core/services/providers.service";

import ThFormFieldModule from "@components/form-field/form-field.module";
import ThButtonComponent from "@components/button/button.component";
import ThIconComponent from "@components/icon/icon.component";
import ThCardComponent from "@components/card/card.component";

import SearchStore from "@app/store/search.store";

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
  private _searchStore = inject(SearchStore)
  providerService = inject(ProvidersService)

  fb = inject(FormBuilder)

  private minMaxValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const min = group.get('min')?.value
    const max = group.get('max')?.value
    if (min !== '' && max !== '' && Number(max) < Number(min))
      return { maxLessThanMin: true }
    return null
  };

  filtersForm = this.fb.group({
    categories: this.fb.array(
      this.providerService.availableCategories()
        .map((category) => 
          new FormControl(this._searchStore.category() === category.id
      ))
    ),
    location: [''],
    min: ['', [Validators.pattern('^[0-9]*$')]],
    max: ['', [Validators.pattern('^[0-9]*$')]],
    qualification: ['']
  }, { validators: [this.minMaxValidator] })

  private _filtersRaw = toSignal(
    this.filtersForm.valueChanges.pipe(
      startWith(this.filtersForm.getRawValue()),
      debounceTime(300),
      map(value => {
        const selectedIds = this.providerService.availableCategories()
        .filter((_, index) => value.categories?.[index])
        .map(cat => cat.id);
      return {
        ...value,
        categories: selectedIds
      };
      })
    ),
  )

  constructor() {
    effect(() => {
      const currentFilters = this._filtersRaw();
      if (currentFilters) {
        this._searchStore.setFilters(currentFilters)
      }
    })
  }

  cleanForm() {
    this.filtersForm.reset()
  }
}