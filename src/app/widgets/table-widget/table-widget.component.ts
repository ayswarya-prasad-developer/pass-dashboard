import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-table-widget',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './table-widget.component.html',
  styleUrls: ['./table-widget.component.scss'],
  template: `
    <mat-card>
      <mat-card-title>{{ config?.title || 'Table Widget' }}</mat-card-title>
      <mat-card-content>
        <!-- Replace this with actual table -->
        <p>Data URL: {{ config?.dataUrl || 'N/A' }}</p>
        <p>Table would render here.</p>
      </mat-card-content>
    </mat-card>
  `
})
export class TableWidgetComponent {
  @Input() config: any;
}
