import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightTrackerPage } from './weight-tracker.page';

describe('WeightTrackerPage', () => {
  let component: WeightTrackerPage;
  let fixture: ComponentFixture<WeightTrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightTrackerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
