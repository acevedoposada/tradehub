import { Component } from '@angular/core';

import ThButtonComponent from '@components/button/button.component';
import LinkComponent from '../link/link.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'th-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [
    ThButtonComponent,
    LinkComponent,
    RouterLink
  ]
})
export class HeaderComponent {}