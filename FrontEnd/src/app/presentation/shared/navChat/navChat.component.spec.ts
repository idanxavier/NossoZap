/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavChatComponent } from './navChat.component';

describe('NavChatComponent', () => {
  let component: NavChatComponent;
  let fixture: ComponentFixture<NavChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
