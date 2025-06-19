import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-table-widget',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './table-widget.component.html',
  styleUrls: ['./table-widget.component.scss']
})
export class TableWidgetComponent implements OnInit {
  @Input() dataUrl?: string;

  tableLabel: string = '';
  rows: { label: string; value: number }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (this.dataUrl) {
      this.http.get<any>(this.dataUrl).subscribe({
        next: (data) => {
          this.tableLabel = data.label;
          this.rows = data.labels.map((label: string, index: number) => ({
            label,
            value: data.values[index]
          }));
        },
        error: (err) => console.error('Error loading table data:', err)
      });
    }
  }
}