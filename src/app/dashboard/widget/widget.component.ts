type WidgetType = 'chart' | 'table' | 'text';

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWidgetComponent } from './chart-widget.component';
import { TableWidgetComponent } from './table-widget.component';
import { TextWidgetComponent } from './text-widget.component';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [
    CommonModule,
    ChartWidgetComponent,
    TextWidgetComponent,
    TableWidgetComponent
  ],
  template: `
    <ng-container [ngSwitch]="type">
      <app-chart-widget *ngSwitchCase="'chart'" [chartType]="config.chartType" [dataUrl]="config.dataUrl" />
      <app-text-widget *ngSwitchCase="'text'" />
      <app-table-widget *ngSwitchCase="'table'" />
    </ng-container>
  `
})
export class WidgetComponent {
  @Input() type!: 'chart' | 'text' | 'table';
  @Input() config: any;
}
