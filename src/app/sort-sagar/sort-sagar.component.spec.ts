import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortSagarComponent } from './sort-sagar.component';

describe('SortSagarComponent', () => {
  let component: SortSagarComponent;
  let fixture: ComponentFixture<SortSagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortSagarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortSagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
