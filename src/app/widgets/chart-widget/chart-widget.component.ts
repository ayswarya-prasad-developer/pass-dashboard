import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart-widget',
  standalone: true,
  imports: [CommonModule, NgChartsModule, HttpClientModule],
  template: `
    <div *ngIf="chartConfig?.datasets?.length; else loading" style="width: 100%; height: 300px;">
      <canvas
        baseChart
        [data]="chartConfig"
        [type]="chartType"
        [options]="chartOptions"
      ></canvas>
    </div>
    <ng-template #loading>
      <p>Loading chart data...</p>
    </ng-template>
  `
})
export class ChartWidgetComponent implements OnInit {
  @Input() chartType: ChartType = 'bar';
  @Input() dataUrl: string = '';

  chartConfig: ChartConfiguration['data'] = {
    labels: [],
    datasets: [],
  };

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (!this.dataUrl) {
      return;
    }

    this.http.get<any>(this.dataUrl).subscribe((response) => {
      // Example expected response shape:
      // { labels: string[], label: string, values: number[] }

      this.chartConfig = {
        labels: response.labels,
        datasets: [
          {
            label: response.label,
            data: response.values,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
          },
        ],
      };
    });
  }
}
