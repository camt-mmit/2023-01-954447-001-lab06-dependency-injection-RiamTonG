import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSectionComponent } from './dynamic-section.component';

describe('DynamicSectionComponent', () => {
  let component: DynamicSectionComponent;
  let fixture: ComponentFixture<DynamicSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DynamicSectionComponent]
    });
    fixture = TestBed.createComponent(DynamicSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
