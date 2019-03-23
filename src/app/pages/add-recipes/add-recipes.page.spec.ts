import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipesPage } from './add-recipes.page';

describe('AddRecipesPage', () => {
  let component: AddRecipesPage;
  let fixture: ComponentFixture<AddRecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecipesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
