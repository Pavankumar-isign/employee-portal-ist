import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitDailboxComponent } from './exit-dailbox.component';

describe('ExitDailboxComponent', () => {
  let component: ExitDailboxComponent;
  let fixture: ComponentFixture<ExitDailboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExitDailboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExitDailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
