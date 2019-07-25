import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Click1Page } from './click1.page';

describe('Click1Page', () => {
  let component: Click1Page;
  let fixture: ComponentFixture<Click1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Click1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Click1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
