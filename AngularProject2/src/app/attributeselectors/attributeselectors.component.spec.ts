import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeselectorsComponent } from './attributeselectors.component';

describe('AttributeselectorsComponent', () => {
  let component: AttributeselectorsComponent;
  let fixture: ComponentFixture<AttributeselectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AttributeselectorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeselectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
