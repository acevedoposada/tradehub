import { computed, Injectable, signal } from "@angular/core";
import { categories } from "@app/constants/categories";
import { Provider, providers } from "@app/constants/providers";

@Injectable({ providedIn: 'root' })
export default class ProvidersService {
  providers = signal<Provider[]>([])

  constructor() {
    this.providers.set(providers);
  }

  availableCategories = computed(() => {
    const usedCategoryIds = new Set(providers.map(provider => provider.category));
    return categories.filter(category => usedCategoryIds.has(category.id))
  })
}