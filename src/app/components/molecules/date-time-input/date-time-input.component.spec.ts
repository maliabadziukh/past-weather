import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTimeInputComponent } from './date-time-input.component';

describe('DateTimeInputComponent', () => {
  let component: DateTimeInputComponent;
  let fixture: ComponentFixture<DateTimeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateTimeInputComponent],
    });
    fixture = TestBed.createComponent(DateTimeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
