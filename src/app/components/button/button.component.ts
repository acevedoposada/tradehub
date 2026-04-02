import { CommonModule } from "@angular/common";
import { Component, computed, input, ViewEncapsulation } from "@angular/core";
import ThIconComponent from "../icon/icon.component";

export type ButtonVariant = 'solid' | 'outline' | 'tonal';

@Component({
  selector: 'button[th-btn],a[th-btn]',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, ThIconComponent],
  host: {
    '[class]': 'hostClasses()',
    '[attr.data-variant]': 'variant()',
    '[attr.data-color]': 'color()'
  }
})
export default class ThButtonComponent {
  variant = input<ButtonVariant, string | ButtonVariant>('solid', {
    alias: 'th-btn',
    transform: (value) => (value === '' ? 'solid' : (value as ButtonVariant))
  })
  color = input<'primary' | 'secondary' | 'danger'>('secondary', { alias: 'th-btn-color' })
  icon = input<string | undefined>()
  fullWith = input<boolean>(false, { alias: 'th-btn-full-width' })

  hostClasses = computed(() => {
    return {
      'th-btn': true,
      [`th-btn--${this.variant()}`]: true,
      [`th-btn--${this.color()}`]: true,
      'th-btn-icon': !!this.icon(),
      ['th-btn--full-width']: this.fullWith()
    }
  })
}