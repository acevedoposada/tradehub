import { Component, signal } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "th-footer",
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  imports: [RouterLink]
})
export default class FooterComponent {
  currentYear = signal(new Date().getFullYear())
}