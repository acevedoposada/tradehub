import { Component } from "@angular/core";

import ThIconComponent from "@components/icon/icon.component";
import ThButtonComponent from "../button/button.component";

@Component({
  selector: 'th-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css'],
  imports: [ThIconComponent, ThButtonComponent]
})
export default class ThSearchInputComponent {}