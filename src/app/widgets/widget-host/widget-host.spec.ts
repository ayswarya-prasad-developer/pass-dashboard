import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetHost } from './widget-host';

describe('WidgetHost', () => {
  let component: WidgetHost;
  let fixture: ComponentFixture<WidgetHost>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetHost]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetHost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
