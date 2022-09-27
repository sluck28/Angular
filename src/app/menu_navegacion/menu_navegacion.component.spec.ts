/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Menu_navegacionComponent } from './menu_navegacion.component';

describe('Menu_navegacionComponent', () => {
  let component: Menu_navegacionComponent;
  let fixture: ComponentFixture<Menu_navegacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu_navegacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu_navegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
