/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DonateViewComponent } from './donate-view.component';

describe('DonateViewComponent', () => {
  let component: DonateViewComponent;
  let fixture: ComponentFixture<DonateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
