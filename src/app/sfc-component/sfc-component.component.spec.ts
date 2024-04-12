import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfcComponentComponent } from './sfc-component.component';

describe('SfcComponentComponent', () => {
  let component: SfcComponentComponent;
  let fixture: ComponentFixture<SfcComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SfcComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SfcComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
