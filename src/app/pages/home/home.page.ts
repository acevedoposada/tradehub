import { Component, computed, inject } from "@angular/core";

import ThSearchInputComponent from "@app/components/search-input/search-input.component";
import ThIconComponent from "@app/components/icon/icon.component";
import { Router, RouterLink } from "@angular/router";
import ThProviderCardComponent from "@app/features/providers/components/card/card.component";
import SearchStore from "@app/store/search.store";
import ProvidersService from "@app/core/services/providers.service";
import { trustFeatures } from "@app/constants/home";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  imports: [RouterLink, ThSearchInputComponent, ThIconComponent, ThProviderCardComponent],
})
export default class HomePage {
  private router = inject(Router)
  private searchStore = inject(SearchStore)
  private providersService = inject(ProvidersService)

  providers = computed(() => this.providersService.providers().slice(0, 4))
  categories = computed(() => this.providersService.availableCategories().slice(0, 5))

  trustFeatures = trustFeatures

  onCategoryClick(category: string) {
    this.searchStore.setCategory(category)
    this._redirectToList()
  }
  
  handleSearch(value: { searchTerm: string }) {
    this.searchStore.setTerm(value.searchTerm)
    this._redirectToList()
  }
  
  private _redirectToList() {
    this.router.navigate(['/providers/list'])
  }
}