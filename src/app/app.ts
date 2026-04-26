import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { NgxSonnerToaster } from 'ngx-sonner'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSonnerToaster],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tradehub-app';
}
