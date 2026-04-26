import { I18nPluralPipe } from "@angular/common";
import { Component, effect, inject, input, signal } from "@angular/core";
import { Router, RouterLink } from "@angular/router";

import ThButtonComponent from "@app/components/button/button.component";
import ThIconComponent from "@app/components/icon/icon.component";
import { Provider } from "@app/constants/providers";
import ProvidersService from "@app/core/services/providers.service";
import SearchStore from "@app/store/search.store";

@Component({
  selector: 'th-provider-detail-page',
  templateUrl: './detail.page.html',
  styleUrl: './detail.page.css',
  imports: [ThIconComponent, ThButtonComponent, RouterLink, I18nPluralPipe]
})
export default class ProviderDetailPage {
  private _router = inject(Router)
  private _providerService = inject(ProvidersService)
  private _searchStore = inject(SearchStore)

  provider = signal<Provider | undefined>(undefined)

  id = input<string>();

  reviewPluralMapping = {
    '=0': 'Sin reseñas',
    '=1': '1 reseña',
    'other': '# reseñas' 
  };

  experiencePluralMapping = {
    '=0': 'Pocos meses',
    '=1': 'Un año',
    'other': '# años' 
  };

  constructor() {
    effect(() => {
      const currentId = this.id()
      if (!currentId) return

      this.provider.set(this._providerService.getProviderById(currentId))
    })
  }

  showSimilarProviders() {
    this._router.navigate(['/providers', 'list'])
    const category = this.provider()?.category
    if (!category) return
    this._searchStore.setCategory(category, 'detail')
  }
}