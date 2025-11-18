import { MatChipsModule } from '@angular/material/chips';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-activity-log',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  MatPaginatorModule,
  MatChipsModule
  ],
  templateUrl: './activity-log.html',
  styleUrl: './activity-log.scss'
})
export class ActivityLogComponent {
  logs = [
    { user: 'Alice Smith', timestamp: '2025-11-11 09:00', action: 'login' },
    { user: 'Bob Jones', timestamp: '2025-11-11 09:10', action: 'logout' },
    { user: 'Charlie Brown', timestamp: '2025-11-11 09:15', action: 'delete' }
  ];
  displayedColumns = ['user', 'timestamp', 'action', 'delete'];
}
