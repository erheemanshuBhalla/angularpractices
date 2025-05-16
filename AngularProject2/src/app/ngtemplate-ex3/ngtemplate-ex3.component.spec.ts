import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplateEx3Component } from './ngtemplate-ex3.component';

describe('NgtemplateEx3Component', () => {
  let component: NgtemplateEx3Component;
  let fixture: ComponentFixture<NgtemplateEx3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgtemplateEx3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgtemplateEx3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
