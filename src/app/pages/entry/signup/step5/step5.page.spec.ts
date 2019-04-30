import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step5Page } from './step5.page';

describe('Step5Page', () => {
  let component: Step5Page;
  let fixture: ComponentFixture<Step5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step5Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
