import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtemplateExComponent } from './ngtemplate-ex.component';

describe('NgtemplateExComponent', () => {
  let component: NgtemplateExComponent;
  let fixture: ComponentFixture<NgtemplateExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgtemplateExComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgtemplateExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
