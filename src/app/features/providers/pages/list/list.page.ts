import { Component, computed, DestroyRef, inject } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import ThFiltersComponent from "@features/providers/components/filters/filters.component";
import ThFormFieldComponent from "@app/components/form-field/form-field.component";

import SearchStore from "@store/search.store";

@Component({
  selector: "th-list-providers-page",
  templateUrl: "./list.page.html",
  styleUrl: "./list.page.css",
  imports: [ThFiltersComponent, ThFormFieldComponent, ReactiveFormsModule]
})
export default class ListProvidersPage {
  searchStore = inject(SearchStore)
  destroyRef = inject(DestroyRef)

  searchTerm = computed(() => this.searchStore.currentTerm())

  searchField = new FormControl(this.searchTerm())

  constructor() {
    this.destroyRef.onDestroy(() => {
      if (!this.searchTerm().trim().length) return;
      this.searchStore.reset()
    })
  }
}