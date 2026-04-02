import { Component, computed, DestroyRef, inject } from "@angular/core";
import SearchStore from "@app/store/search.store";

@Component({
  selector: "th-list-providers-page",
  templateUrl: "./list.page.html",
  styleUrl: "./list.page.css"
})
export default class ListProvidersPage {
  searchStore = inject(SearchStore)
  destroyRef = inject(DestroyRef)

  searchTerm = computed(() => this.searchStore.currentTerm())

  constructor() {
    this.destroyRef.onDestroy(() => {
      if (!this.searchTerm().trim().length) return;
      console.log('Cleaning up ListProvidersPage, resetting search term')
      this.searchStore.reset()
    })
  }
}