
import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list';
import { ActivityLogComponent } from './activity-log/activity-log';
import { MATERIAL_IMPORTS } from './material-imports';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UserListComponent, ActivityLogComponent, ...MATERIAL_IMPORTS],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {}
