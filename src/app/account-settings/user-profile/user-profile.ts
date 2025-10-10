import { UserService } from './../../service/user-service';
import { Component, inject } from '@angular/core';
import { ProfilePic } from './profile-pic/profile-pic';
import { UserBio } from './user-bio/user-bio';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-user-profile',
  imports: [ProfilePic,UserBio,MatCardModule],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.scss',
})
export class UserProfile {
  userService = inject(UserService);
  user = this.userService.getUser()

}
