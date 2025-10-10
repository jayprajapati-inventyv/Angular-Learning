import { UserProfile } from './user-profile/user-profile';
import { UserService } from './../service/user-service';
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { PaymentInfo } from './payment-info/payment-info';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-account-settings',
  imports: [PaymentInfo,UserProfile,MatCardModule],
  templateUrl: './account-settings.html',
  styleUrl: './account-settings.scss'
})
export class AccountSettings {
  userService = inject(UserService);
}
