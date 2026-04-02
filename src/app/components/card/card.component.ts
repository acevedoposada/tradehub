import { Component, computed, input, ViewEncapsulation } from "@angular/core";

const shadows = {
  0: 'shadow-none',
  1: 'shadow-xs',
  2: 'shadow-sm',
  3: 'shadow-md',
  4: 'shadow-lg',
  5: 'shadow-xl',
  6: 'shadow-2xl',
}

@Component({
  selector: 'th-card',
  template: `
    <ng-content>
      <ng-content select="[th-card-header]"></ng-content>
      <ng-content select="[th-card-content]"></ng-content>
    </ng-content>
  `,
  styleUrl: './card.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class]': 'allClasses()',
  }
})
export default class ThCardComponent {
  elevation = input<keyof typeof shadows>(1)
  
  allClasses = computed(() => 
    `card ${shadows[this.elevation()]}`
  )
}