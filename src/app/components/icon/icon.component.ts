import { Component, computed, input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'th-icon',
  standalone: true,
  template: ``,
  styles: [`
    :host { 
      display: inline-block; 
      vertical-align: middle;
    }
    :host::before { font-size: inherit !important; }
  `],
  host: {
    '[class]': 'iconClasses()',
    'aria-hidden': 'true'
  },
  encapsulation: ViewEncapsulation.None
})
export default class ThIconComponent {
  name = input.required<string>()
  customClass = input<string>('', { alias: 'class' })

  iconClasses = computed(() => `ti ti-${this.name()} ${this.customClass()}`.trim())
}