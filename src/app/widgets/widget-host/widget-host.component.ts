// src/app/widgets/widget-host/widget-host.component.ts
import {
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentRef,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-widget-host',
  standalone: true,
  template: `<ng-template #container></ng-template>`
})
export class WidgetHostComponent implements OnInit {
  @Input() component!: any;
  @Input() config!: any;

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  componentRef!: ComponentRef<any>;

  ngOnInit() {
    this.container.clear();
    this.componentRef = this.container.createComponent(this.component);
    if (this.config) {
      this.componentRef.instance.config = this.config;
    }
  }
}
