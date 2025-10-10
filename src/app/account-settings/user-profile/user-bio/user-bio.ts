
import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { UserService } from '../../../service/user-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-bio',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-bio.html',
  styleUrl: './user-bio.scss'
})
export class UserBio {
  userService = inject(UserService);
  user = this.userService.getUser();
  editBio = false;
  bioInput = this.user.bio;
  saveBio() {
    this.userService.updateUser({ ...this.user, bio: this.bioInput });
    this.user = this.userService.getUser();
    this.editBio = false;
  }
}
