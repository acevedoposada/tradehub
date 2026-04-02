import { Component, input } from "@angular/core";
import ThButtonComponent from "@app/components/button/button.component";
import ThIconComponent from "@app/components/icon/icon.component";

@Component({
  selector: 'th-provider-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [ThButtonComponent, ThIconComponent]
})
export default class ThProviderCardComponent {
  verified = input<boolean>(false)
}