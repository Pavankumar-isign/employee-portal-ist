import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfCharanComponent } from './sf-charan.component';

describe('SfCharanComponent', () => {
  let component: SfCharanComponent;
  let fixture: ComponentFixture<SfCharanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SfCharanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SfCharanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
