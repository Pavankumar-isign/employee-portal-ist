import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SfComp5Component } from './sf-comp-5.component';

describe('SfComp5Component', () => {
  let component: SfComp5Component;
  let fixture: ComponentFixture<SfComp5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SfComp5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SfComp5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
