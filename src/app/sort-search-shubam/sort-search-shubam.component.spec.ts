import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortSearchShubamComponent } from './sort-search-shubam.component';

describe('SortSearchShubamComponent', () => {
  let component: SortSearchShubamComponent;
  let fixture: ComponentFixture<SortSearchShubamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortSearchShubamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortSearchShubamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
