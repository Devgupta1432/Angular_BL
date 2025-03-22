import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'helloworld-angular';
  bridgeLabzLogo = 'https://www.bridgelabz.com/assets/images/BridgeLabz%20Brand%20Logo.svg';
}
