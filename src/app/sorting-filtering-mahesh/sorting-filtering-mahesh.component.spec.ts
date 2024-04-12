import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingFilteringMaheshComponent } from './sorting-filtering-mahesh.component';

describe('SortingFilteringMaheshComponent', () => {
  let component: SortingFilteringMaheshComponent;
  let fixture: ComponentFixture<SortingFilteringMaheshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortingFilteringMaheshComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortingFilteringMaheshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
