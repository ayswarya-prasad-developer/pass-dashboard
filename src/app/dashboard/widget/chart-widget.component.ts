import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartConfiguration, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-chart-widget',
  standalone: true,
  imports: [CommonModule, NgChartsModule, HttpClientModule],
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss']
})
export class ChartWidgetComponent implements OnInit {
  @Input() chartType: ChartType = 'bar';
  @Input() dataUrl?: string;

  chartConfig?: ChartConfiguration;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (this.dataUrl) {
      this.http.get<any>(this.dataUrl).subscribe({
        next: (data: any) => this.setupChart(data),
        error: (err: any) => console.error('Error fetching chart data:', err),
      });
    } else {
      // fallback static data
      this.chartConfig = {
        type: this.chartType,
        data: {
          labels: ['A', 'B', 'C'],
          datasets: [{ label: 'Dataset', data: [10, 20, 30] }]
        },
        options: { responsive: true }
      };
    }
  }

  setupChart(data: { label: string; labels: string[]; values: number[] }) {
  this.chartConfig = {
    type: this.chartType,
    data: {
      labels: data.labels,
      datasets: [
        {
          label: data.label,
          data: data.values,
          backgroundColor: 'rgba(75, 192, 192, 0.5)', // optional styling
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true
        }
      }
    }
  };
}
}
