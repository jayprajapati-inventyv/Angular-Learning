import { AccountSettings } from './account-settings/account-settings';
import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CartComponent } from './cart-component/cart-component';
import { AuthService } from './service/auth.service';
import { Navbar } from './navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CartComponent, AccountSettings, RouterLink, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  auth = inject(AuthService);

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}
