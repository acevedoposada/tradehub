import { CurrencyPipe } from "@angular/common";
import { Component, computed, input, output } from "@angular/core";
import { RouterLink } from "@angular/router";
import ThButtonComponent, { ButtonColor, ButtonVariant } from "@app/components/button/button.component";
import ThIconComponent from "@app/components/icon/icon.component";
import { categories } from "@app/constants/categories";
import { Provider } from "@app/constants/providers";

export type CardVariant = 'price-focus' | 'content-focus';

const SIGN_SYMBOL = '$'

@Component({
  selector: 'th-provider-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [ThButtonComponent, ThIconComponent, RouterLink, CurrencyPipe]
})
export default class ThProviderCardComponent {
  id = input.required<string | number>()
  name = input<string>()
  description = input<string>()
  variant = input<CardVariant>('content-focus')
  category = input<string | undefined>()
  cover = input.required<string>()
  verified = input<boolean>(false)
  favorite = input<boolean>(false)
  costRate = input<1 | 2 | 3>(1)
  qualification = input<number>()
  location = input.required<string>()

  minProduct = input<Provider['minProduct']>()

  favoriteClick = output<string | number>()

  renderSigns = computed(() => ({
    active: SIGN_SYMBOL.repeat(this.costRate()),
    inactive: SIGN_SYMBOL.repeat(3 - this.costRate())
  }))

  categoryName = computed(() => {
    return categories.find(category => category.id === this.category())?.name;
  })

  detailBtnOpts = computed<{ variant: ButtonVariant, color: ButtonColor }>(() => {
    if (this.variant() === 'content-focus') return { variant: 'solid', color: 'primary' }
    if (this.variant() === 'price-focus') return { variant: 'tonal', color: 'secondary' }
    return { variant: 'tonal', color: 'secondary' }
  })

  onFavoriteClick() {
    this.favoriteClick.emit(this.id());
  }
}