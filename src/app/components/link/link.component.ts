import { Component, input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "th-link",
  templateUrl: "./link.component.html",
  styleUrl: "./link.component.css",
  imports: [
    RouterLink,
    RouterLinkActive
  ]
})
export default class LinkComponent {
  link = input.required<string>()
  linkActiveOptions = input<{ exact: boolean }>({ exact: true })
}