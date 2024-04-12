import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailboxComponent } from './dailbox.component';

describe('DailboxComponent', () => {
  let component: DailboxComponent;
  let fixture: ComponentFixture<DailboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DailboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
