import { Component, inject } from '@angular/core';
import { UserService } from '../../../service/user-service';
@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.html',
  styleUrl: './profile-pic.scss'
})
export class ProfilePic {
  userService = inject(UserService);
  user = this.userService.getUser();
  defaultPicUrl = 'https://www.gravatar.com/avatar/?d=mp'; // fallback image

  // Returns the profile picture URL if set, otherwise undefined
  get profilePicUrl(): string | undefined {
    return (this.user && typeof this.user === 'object' && 'profilePicture' in this.user)
      ? (this.user as { profilePicture?: string }).profilePicture
      : undefined;
  }

  // Handle file input for uploading a new profile picture
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        this.userService.updateProfilePicture(result);

        this.user = this.userService.getUser();
      };
      reader.readAsDataURL(file);
    }
  }
}
