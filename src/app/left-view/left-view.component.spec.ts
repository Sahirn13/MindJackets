import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftViewComponent } from './left-view.component';

describe('LeftViewComponent', () => {
  let component: LeftViewComponent;
  let fixture: ComponentFixture<LeftViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
