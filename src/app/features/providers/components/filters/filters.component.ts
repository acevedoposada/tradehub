import { Component } from "@angular/core";
import ThButtonComponent from "@app/components/button/button.component";
import ThCardComponent from "@app/components/card/card.component";

@Component({
  selector: "th-providers-filters",
  templateUrl: "./filters.component.html",
  styleUrl: "./filters.component.css",
  imports: [ThCardComponent, ThButtonComponent]
})
export default class ThFiltersComponent {}