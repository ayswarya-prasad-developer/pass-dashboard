import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-text-widget',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './text-widget.component.html',
  styleUrls: ['./text-widget.component.scss'],
  template: `
    <mat-card>
      <mat-card-title>{{ config?.title || 'Text Widget' }}</mat-card-title>
      <mat-card-content>
        <p>{{ config?.text || 'Static text goes here.' }}</p>
      </mat-card-content>
    </mat-card>
  `
})
export class TextWidgetComponent {
  @Input() config: any;
}
