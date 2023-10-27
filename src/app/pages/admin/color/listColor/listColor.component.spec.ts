/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListColorComponent } from './listColor.component';

describe('ListColorComponent', () => {
  let component: ListColorComponent;
  let fixture: ComponentFixture<ListColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
