import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-time-input',
  templateUrl: './date-time-input.component.html',
  styleUrls: ['./date-time-input.component.css'],
})
export class DateTimeInputComponent implements OnInit {
  dateTime: AbstractControl;
  @Input() parentForm: FormGroup;

  ngOnInit(): void {
    this.dateTime = new FormControl('');
    this.parentForm.addControl('dateTime', this.dateTime);
  }
}
