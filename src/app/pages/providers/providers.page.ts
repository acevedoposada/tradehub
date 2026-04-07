import { Router, RouterLink } from "@angular/router";
import { Component, inject } from "@angular/core";

import { categories as categoriesList } from "@constants/categories";

import ThButtonComponent from "@components/button/button.component";
import ThCardComponent from "@components/card/card.component";
import ThIconComponent from "@components/icon/icon.component";
import ThChipComponent from "@components/chip/chip.component";
import SearchStore from "@app/store/search.store";


@Component({
  selector: "th-providers-page",
  templateUrl: "./providers.page.html",
  styleUrl: "./providers.page.css",
  imports: [
    ThChipComponent,
    ThButtonComponent,
    ThIconComponent,
    ThCardComponent,
    RouterLink
  ]
})
export default class ProvidersPage {
  router = inject(Router)
  searchStore = inject(SearchStore)

  categories = categoriesList

  goToList(category: string) {
    this.searchStore.setCategory(category, 'provider_landing')
    this.router.navigate(["providers", "list"])
  }
}