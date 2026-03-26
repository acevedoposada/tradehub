import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-public-layout',
  templateUrl: './public.layout.html',
  styleUrls: ['./public.layout.css'],
  imports: [RouterOutlet]
})
export class PublicLayout {}