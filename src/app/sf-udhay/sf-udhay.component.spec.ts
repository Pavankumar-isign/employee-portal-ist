import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfUdhayComponent } from './sf-udhay.component';

describe('SfUdhayComponent', () => {
  let component: SfUdhayComponent;
  let fixture: ComponentFixture<SfUdhayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SfUdhayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SfUdhayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
