/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavadminComponent } from './navadmin.component';

describe('NavadminComponent', () => {
  let component: NavadminComponent;
  let fixture: ComponentFixture<NavadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
