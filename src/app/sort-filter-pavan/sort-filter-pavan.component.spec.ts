import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortFilterPavanComponent } from './sort-filter-pavan.component';

describe('SortFilterPavanComponent', () => {
  let component: SortFilterPavanComponent;
  let fixture: ComponentFixture<SortFilterPavanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortFilterPavanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortFilterPavanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
