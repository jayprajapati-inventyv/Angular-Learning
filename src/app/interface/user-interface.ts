export interface UserInterface {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  lastLogin: Date | null | undefined;
  bio: string;
  userPlan?:string;
}

