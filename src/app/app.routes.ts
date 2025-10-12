import { Routes } from '@angular/router';
import { CartComponent } from './cart-component/cart-component';
import { AccountSettings } from './account-settings/account-settings';
import { loginGuard } from './login-guard';
export const routes: Routes = [

    { path: 'cart', component: CartComponent, canActivate: [loginGuard] },
    { path: 'account-settings', component: AccountSettings, canActivate: [loginGuard] }
];
