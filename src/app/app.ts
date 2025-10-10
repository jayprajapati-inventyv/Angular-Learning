import { AccountSettings } from './account-settings/account-settings';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from './cart-component/cart-component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CartComponent,AccountSettings],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {


}
