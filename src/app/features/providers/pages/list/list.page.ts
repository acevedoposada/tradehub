import { Component, computed, DestroyRef, inject, signal } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import ThFiltersComponent from "@features/providers/components/filters/filters.component";

import SearchStore from "@store/search.store";
import ThFormFieldModule from "@app/components/form-field/form-field.module";
import ThProviderCardComponent from "../../components/card/card.component";
import { Provider, providers } from "@app/constants/providers";

@Component({
  selector: "th-list-providers-page",
  templateUrl: "./list.page.html",
  styleUrl: "./list.page.css",
  imports: [ThFiltersComponent, ThFormFieldModule, ThProviderCardComponent, ReactiveFormsModule]
})
export default class ListProvidersPage {
  searchStore = inject(SearchStore)
  destroyRef = inject(DestroyRef)

  providersList = signal<Provider[]>([])

  searchTerm = computed(() => this.searchStore.currentTerm())

  searchField = new FormControl(this.searchTerm())

  constructor() {
    this.providersList.set(providers)

    this.destroyRef.onDestroy(() => {
      if (!this.searchTerm().trim().length) return;
      this.searchStore.reset()
    })
  }

  onFavoriteClick(id: number) {
    console.log('Clicked: ' + id)
  }
}