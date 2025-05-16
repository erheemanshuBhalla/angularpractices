import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplateEx2Component } from './ngtemplate-ex2.component';

describe('NgtemplateEx2Component', () => {
  let component: NgtemplateEx2Component;
  let fixture: ComponentFixture<NgtemplateEx2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgtemplateEx2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgtemplateEx2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
