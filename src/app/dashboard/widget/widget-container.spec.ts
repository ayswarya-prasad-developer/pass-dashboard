import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetContainer } from './widget-container';

describe('WidgetContainer', () => {
  let component: WidgetContainer;
  let fixture: ComponentFixture<WidgetContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WidgetContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
