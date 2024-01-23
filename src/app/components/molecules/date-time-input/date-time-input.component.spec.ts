import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { DateTimeInputComponent } from './date-time-input.component';

describe('DateTimeInputComponent', () => {
  let component: DateTimeInputComponent;
  let fixture: ComponentFixture<DateTimeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [DateTimeInputComponent],
    });
    fixture = TestBed.createComponent(DateTimeInputComponent);
    component = fixture.componentInstance;

    component.parentForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should show error message if input is invalid & touched', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('input');

    inputElement.value = '';
    component.dateTime.markAsTouched();
    fixture.detectChanges();
    const errorElement: HTMLInputElement = fixture.nativeElement.querySelector('span');

    expect(errorElement.textContent).toContain('Please select a date and time!');
  });
});
