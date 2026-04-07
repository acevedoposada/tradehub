import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";

import ThButtonComponent from "@app/components/button/button.component";
import ThIconComponent from "@app/components/icon/icon.component";

@Component({
  selector: 'th-provider-detail-page',
  templateUrl: './detail.page.html',
  styleUrl: './detail.page.css',
  imports: [ThIconComponent, ThButtonComponent, RouterLink]
})
export default class ProviderDetailPage {
  id = input<string>();
}