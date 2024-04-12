import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesDialogComponent } from './stories-dialog.component';

describe('StoriesDialogComponent', () => {
  let component: StoriesDialogComponent;
  let fixture: ComponentFixture<StoriesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoriesDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoriesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
