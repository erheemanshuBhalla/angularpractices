import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplateEx4Component } from './ngtemplate-ex4.component';

describe('NgtemplateEx4Component', () => {
  let component: NgtemplateEx4Component;
  let fixture: ComponentFixture<NgtemplateEx4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgtemplateEx4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgtemplateEx4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
