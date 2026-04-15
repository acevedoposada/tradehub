import { Component, computed, DestroyRef, inject, signal } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import ThFiltersComponent from "@features/providers/components/filters/filters.component";

import SearchStore from "@store/search.store";
import ThFormFieldModule from "@app/components/form-field/form-field.module";
import ThProviderCardComponent from "../../components/card/card.component";
import { Provider, providers } from "@app/constants/providers";
import ProvidersService from "@app/core/services/providers.service";

@Component({
  selector: "th-list-providers-page",
  templateUrl: "./list.page.html",
  styleUrl: "./list.page.css",
  imports: [ThFiltersComponent, ThFormFieldModule, ThProviderCardComponent, ReactiveFormsModule]
})
export default class ListProvidersPage {
  searchStore = inject(SearchStore)
  destroyRef = inject(DestroyRef)
  providersService = inject(ProvidersService)

  searchTerm = computed(() => this.searchStore.currentTerm())
  providersList = computed(() => this.providersService.providers())

  filteredProviders = computed(() => {
    const currentTerm = this.searchStore.currentTerm()
    return this.providersList()
      .filter((provider) => 
        provider.category === this.searchStore.category()
        || provider.name.includes(currentTerm)
      )
  })

  searchField = new FormControl(this.searchTerm())

  constructor() {
    this.destroyRef.onDestroy(() => {
      if (!this.searchTerm().trim().length) return;
      this.searchStore.reset()
    })
  }

  onFavoriteClick(id: number) {
    console.log('Clicked: ' + id)
    this.providersService.setProviderFavorite(id)
  }
}