export type WidgetType = 'chart' | 'table' | 'text';

export interface Widget {
  type: WidgetType;
  config: any;
}
