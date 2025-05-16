import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponentContentComponent } from './child-component-content.component';

describe('ChildComponentContentComponent', () => {
  let component: ChildComponentContentComponent;
  let fixture: ComponentFixture<ChildComponentContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChildComponentContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponentContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
