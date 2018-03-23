import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 'home'Component } from './'home'.component';

describe(''home'Component', () => {
  let component: 'home'Component;
  let fixture: ComponentFixture<'home'Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 'home'Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent('home'Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
