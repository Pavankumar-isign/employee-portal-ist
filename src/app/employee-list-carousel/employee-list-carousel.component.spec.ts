import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListCarouselComponent } from './employee-list-carousel.component';

describe('EmployeeListCarouselComponent', () => {
  let component: EmployeeListCarouselComponent;
  let fixture: ComponentFixture<EmployeeListCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeListCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeListCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
