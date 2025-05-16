import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEx2Component } from './parent-ex2.component';

describe('ParentEx2Component', () => {
  let component: ParentEx2Component;
  let fixture: ComponentFixture<ParentEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentEx2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
