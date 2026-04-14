import { Component } from "@angular/core";
import ThButtonComponent from "@app/components/button/button.component";
import ThIconComponent from "@app/components/icon/icon.component";

@Component({
  selector: 'th-contact-page',
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.css',
  imports: [ThIconComponent, ThButtonComponent]
})
export default class ContactPage {}