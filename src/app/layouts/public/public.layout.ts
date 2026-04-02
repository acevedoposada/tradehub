import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import FooterComponent from "@app/components/footer/footer.component";
import { HeaderComponent } from "@app/components/header/header.component";

@Component({
  selector: 'th-public-layout',
  templateUrl: './public.layout.html',
  styleUrls: ['./public.layout.css'],
  imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class PublicLayout {}