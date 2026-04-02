import { RouterLink } from "@angular/router";
import { Component } from "@angular/core";

import ThButtonComponent from "@components/button/button.component";
import ThCardComponent from "@components/card/card.component";
import ThIconComponent from "@components/icon/icon.component";
import ThChipComponent from "@components/chip/chip.component";


@Component({
  selector: "th-providers-page",
  templateUrl: "./providers.page.html",
  styleUrl: "./providers.page.css",
  imports: [
    ThChipComponent,
    ThButtonComponent,
    ThIconComponent,
    ThCardComponent,
    RouterLink
  ]
})
export default class ProvidersPage {}