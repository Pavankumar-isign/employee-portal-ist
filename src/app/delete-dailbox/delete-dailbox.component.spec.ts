import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDailboxComponent } from './delete-dailbox.component';

describe('DeleteDailboxComponent', () => {
  let component: DeleteDailboxComponent;
  let fixture: ComponentFixture<DeleteDailboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteDailboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteDailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
