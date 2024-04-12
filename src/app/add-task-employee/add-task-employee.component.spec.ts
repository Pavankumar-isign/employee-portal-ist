import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskEmployeeComponent } from './add-task-employee.component';

describe('AddTaskEmployeeComponent', () => {
  let component: AddTaskEmployeeComponent;
  let fixture: ComponentFixture<AddTaskEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTaskEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTaskEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
