import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerViewComponent } from './inner-view.component';

describe('InnerViewComponent', () => {
  let component: InnerViewComponent;
  let fixture: ComponentFixture<InnerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
