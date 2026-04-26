import { Component, computed, DestroyRef, inject, signal } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import ThFiltersComponent from "@features/providers/components/filters/filters.component";

import SearchStore from "@store/search.store";
import ThFormFieldModule from "@app/components/form-field/form-field.module";
import ThProviderCardComponent from "../../components/card/card.component";
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

  providersList = computed(() => this.providersService.providers())
  searchQuery = signal('')

  filteredProviders = computed(() => {
    const allProviders = this.providersList()
    const currentTerm = this.searchQuery()
    const filters = this.searchStore.filters()

    const filterMin = filters.min ? Number(filters.min) : null
    const filterMax = filters.max ? Number(filters.max) : null
  
    return allProviders
      .filter((provider) => {
        const matchesTerm = currentTerm 
          ? provider.name.toLowerCase().includes(currentTerm.toLocaleLowerCase())
          : true

        const hasSelectedCategories = filters.categories && filters.categories.length > 0
        const matchesCategory = hasSelectedCategories
          ? filters.categories.includes(provider.category)
          : true

        const matchesLocation = filters.location
          ? provider.location.toLowerCase().includes(filters.location?.toLocaleLowerCase())
          : true

        let matchesPrice = true

        if (filterMin !== null || filterMax !== null) {
          matchesPrice = provider.pricing.some(item => {
            const priceValue = Number(item.unitPrice.replace(/[^0-9.-]+/g, ""))
            const isAboveMin = filterMin !== null ? priceValue >= filterMin : true
            const isBelowMax = filterMax !== null ? priceValue <= filterMax : true
            return isAboveMin && isBelowMax
          })
        }

        const matchesQual = filters.qualification 
          ? provider.qualification >= Number(filters.qualification)
          : true

        return matchesTerm && matchesCategory && matchesLocation && matchesQual
      })
  })

  constructor() {
    this.destroyRef.onDestroy(() => {
      if (this.searchQuery && this.searchQuery()?.trim().length) return;
      this.searchStore.reset()
    })
  }

  onFavoriteClick(id: number) {
    this.providersService.setProviderFavorite(id)
  }
}