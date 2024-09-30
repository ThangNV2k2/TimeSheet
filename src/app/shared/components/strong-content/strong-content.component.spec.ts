import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongContentComponent } from './strong-content.component';

describe('StrongContentComponent', () => {
  let component: StrongContentComponent;
  let fixture: ComponentFixture<StrongContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StrongContentComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(StrongContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
