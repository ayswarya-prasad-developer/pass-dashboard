import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from '../dashboard.component';
import { Dashboard } from '../../models/dashboard.model';

@Component({
  selector: 'app-dashboard-tabs',
  standalone: true,
  imports: [CommonModule, MatTabsModule, DashboardComponent],
  template:''
  /*template: `
    <mat-tab-group>
  <mat-tab *ngFor="let dashboard of dashboards" [label]="dashboard.name">
    <app-dashboard [dashboard]="dashboard"></app-dashboard>
  </mat-tab>
</mat-tab-group>
  `*/
})
export class DashboardTabsComponent {
  dashboards: Dashboard[] = [
    {
      id: '1',
      name: 'Dashboard 1',
      widgets: [
        { type: 'chart', config: { title: 'Sales Chart' } },
        { type: 'text', config: { title: 'Welcome', content: 'Welcome to dashboard' } }
      ]
    },
    {
      id: '2',
      name: 'Dashboard 2',
      widgets: [
        { type: 'table', config: { title: 'Users Table' } }
      ]
    }
  ];
}
