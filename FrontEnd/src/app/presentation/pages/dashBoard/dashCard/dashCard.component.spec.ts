/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashCardComponent } from './dashCard.component';

describe('DashCardComponent', () => {
  let component: DashCardComponent;
  let fixture: ComponentFixture<DashCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
