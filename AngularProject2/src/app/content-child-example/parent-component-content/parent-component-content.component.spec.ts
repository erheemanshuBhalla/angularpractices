import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponentContentComponent } from './parent-component-content.component';

describe('ParentComponentContentComponent', () => {
  let component: ParentComponentContentComponent;
  let fixture: ComponentFixture<ParentComponentContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComponentContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComponentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
