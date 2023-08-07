import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDisplaySectionComponent } from './example-display-section.component';

describe('ExampleDisplaySectionComponent', () => {
  let component: ExampleDisplaySectionComponent;
  let fixture: ComponentFixture<ExampleDisplaySectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExampleDisplaySectionComponent]
    });
    fixture = TestBed.createComponent(ExampleDisplaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
