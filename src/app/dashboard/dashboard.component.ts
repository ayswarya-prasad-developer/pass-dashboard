import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChartWidgetComponent } from './widget/chart-widget.component';
import { TableWidgetComponent } from './widget/table-widget.component';
import { TextWidgetComponent } from './widget/text-widget.component';
import { ChartType } from 'chart.js';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChartTypeRegistry } from 'chart.js';


type WidgetType = 'chart' | 'table' | 'text'; 

export interface Widget {
  id: number;
  type: WidgetType;
  chartType?: ChartType;
  dataUrl?: string;
  title?: string;
  content?: string; 
  //chartType?: keyof ChartTypeRegistry; 
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DragDropModule, ChartWidgetComponent,NavbarComponent,
    SidebarComponent,TableWidgetComponent,TextWidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  widgets: Widget[] = [
    {
      id: 1,
      type: 'chart',
      chartType: 'bar',
      dataUrl: 'http://localhost:3000/api/chart-data',
    },
    {
      id: 2,
      type: 'chart',
      chartType: 'line',
      dataUrl: 'http://localhost:3000/api/chart-data',
    },
    {
      id: 3,
      type: 'table',
      dataUrl: 'http://localhost:3000/api/table-data',
      title: 'Monthly Sales Table'
    },
    {
       id: 4,
       type: 'text',
       title: 'Welcome Note',
       content: 'Welcome to the dashboard! Use the widgets to explore data.'
    }
  ];

  drop(event: CdkDragDrop<Widget[]>) {
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
  }
  removeWidget(index: number) {
  this.widgets.splice(index, 1);
  }
}
