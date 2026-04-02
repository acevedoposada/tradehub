import { Component, computed, input } from "@angular/core";

@Component({
  selector: 'th-provider-detail-page',
  templateUrl: './detail.page.html',
  styleUrl: './detail.page.css'
})
export default class ProviderDetailPage {
  id = input<string>();
}