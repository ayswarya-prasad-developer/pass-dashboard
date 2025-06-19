import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-widget',
  standalone: true,
  templateUrl: './text-widget.component.html',
  styleUrls: ['./text-widget.component.scss'],
})
export class TextWidgetComponent {
  @Input() title: string = 'Text Widget';
  @Input() content: string = 'This is a sample text block.';
}

