import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientPage } from './nutrient.page';

describe('NutrientPage', () => {
  let component: NutrientPage;
  let fixture: ComponentFixture<NutrientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutrientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutrientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
