import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintUdhayComponent } from './sprint-udhay.component';

describe('SprintUdhayComponent', () => {
  let component: SprintUdhayComponent;
  let fixture: ComponentFixture<SprintUdhayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SprintUdhayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SprintUdhayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
