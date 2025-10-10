import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user-service';

@Component({
  selector: 'app-payment-info',
  imports: [FormsModule],
  templateUrl: './payment-info.html',
  styleUrl: './payment-info.scss'
})
export class PaymentInfo {
  userService = inject(UserService);
  user = this.userService.getUser();
  selectedPlan: string = this.user.userPlan || 'Free';

  upgradePlan() {
    if (this.user.userPlan !== this.selectedPlan) {
      this.userService.updateUser({ userPlan: this.selectedPlan });
      // Refresh user object to reflect changes
      this.user = this.userService.getUser();
    }
  }
}
