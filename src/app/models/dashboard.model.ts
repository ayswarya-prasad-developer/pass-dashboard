import { Widget } from './widget.model';

export interface Dashboard {
  id: string;
  name: string;
  widgets: Widget[];
}