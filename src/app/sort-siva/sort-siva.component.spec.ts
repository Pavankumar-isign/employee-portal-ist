import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortSivaComponent } from './sort-siva.component';

describe('SortSivaComponent', () => {
  let component: SortSivaComponent;
  let fixture: ComponentFixture<SortSivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SortSivaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SortSivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
