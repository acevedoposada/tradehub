import { Component, input } from "@angular/core";

@Component({
  selector: 'th-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  host: {
    '[class]': '""'
  }
})
export default class ThCardComponent {
  customClasses = input<string>('', { alias: 'class' })
}