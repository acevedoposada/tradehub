import { computed, Injectable, signal } from "@angular/core";
import { categories } from "@app/constants/categories";
import { Provider, providers } from "@app/constants/providers";

@Injectable({ providedIn: 'root' })
export default class ProvidersService {
  providers = signal<Provider[]>([])

  constructor() {
    this.providers.set(providers);
    this._checkSavedFavorites()
  }

  availableCategories = computed(() => {
    const usedCategoryIds = new Set(providers.map(provider => provider.category));
    return categories.filter(category => usedCategoryIds.has(category.id))
  })

  setProviderFavorite(id: string | number) {
    const providerIndex = this.providers().findIndex(prov => prov.id === id)
    if (!providerIndex && providerIndex !== 0) throw new Error("Provider doesn't exists")
    const providers = this.providers()
    const provider = providers[providerIndex]
    providers[providerIndex] = { ...provider, favorite: !provider.favorite}
    this.providers.set([...providers]);
    this._saveFavorites(id)
  }

  private _checkSavedFavorites() {
    const storageItems = localStorage.getItem("favorites");
    if (!storageItems) return
    
    const favorites: (string | number)[] = JSON.parse(storageItems)
    if (favorites.length === 0) return

    this.providers.set([
      ...this.providers()
        .map(prov => ({
          ...prov,
          favorite: favorites.includes(prov.id)
        })
      )
    ])

  }

  private _saveFavorites(id: string | number) {
    let unhashedFavorites = localStorage.getItem("favorites")
    if (!unhashedFavorites) {
      localStorage.setItem("favorites", JSON.stringify([id]))
      return
    }

    const favorites = new Set<string | number>(JSON.parse(unhashedFavorites))

    if (favorites.has(id)) favorites.delete(id)
    else favorites.add(id)
    
    const newFavories: (string | number)[] = []
    favorites.forEach(fav => newFavories.push(fav))

    localStorage.setItem("favorites", JSON.stringify(newFavories));
  }
}