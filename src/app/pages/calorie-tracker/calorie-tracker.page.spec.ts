import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieTrackerPage } from './calorie-tracker.page';

describe('CalorieTrackerPage', () => {
  let component: CalorieTrackerPage;
  let fixture: ComponentFixture<CalorieTrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalorieTrackerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalorieTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
