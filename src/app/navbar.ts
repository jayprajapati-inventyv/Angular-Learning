import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './navbar.html',
    styleUrl: './navbar.scss',
})
export class Navbar {
    auth = inject(AuthService);
    router = inject(Router);

    isLoggedIn() {
        return this.auth.isLoggedIn();
    }

    login() {
        this.auth.login();
    }

    logout() {
        this.auth.logout();
        this.router.navigateByUrl('/');
    }
}
