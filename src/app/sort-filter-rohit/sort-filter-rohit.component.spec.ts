import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortFilterRohitComponent } from './sort-filter-rohit.component';

describe('SortFilterRohitComponent', () => {
  let component: SortFilterRohitComponent;
  let fixture: ComponentFixture<SortFilterRohitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortFilterRohitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortFilterRohitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
