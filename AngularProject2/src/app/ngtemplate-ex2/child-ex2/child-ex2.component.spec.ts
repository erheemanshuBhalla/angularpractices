import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildEx2Component } from './child-ex2.component';

describe('ChildEx2Component', () => {
  let component: ChildEx2Component;
  let fixture: ComponentFixture<ChildEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildEx2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
