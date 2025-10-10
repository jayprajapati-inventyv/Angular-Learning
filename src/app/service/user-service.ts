import { Injectable } from '@angular/core';
import { UserInterface } from '../interface/user-interface';
import { signal } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = signal<UserInterface>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 30,
    isActive: true,
    bio: 'A short bio about John Doe.',
    lastLogin: null
  });
  updateUser(updatedUser: Partial<UserInterface>) {
    console.log('Updating user with data:', updatedUser);
    this.user.update(item=> ({ ...item, ...updatedUser }));
    console.log('User after update:', this.user());
  }
  userInfo = this.user.asReadonly();
  getUser(): UserInterface {
    return this.userInfo();
  }
  updateProfilePicture(profilePictureUrl: string) {
    this.user.update(user => ({
      ...user,
      profilePicture: profilePictureUrl
    }));
  }
}
