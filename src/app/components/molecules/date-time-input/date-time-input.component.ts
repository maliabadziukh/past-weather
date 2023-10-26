import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateTimeService } from 'src/app/services/date-time.service';

@Component({
  selector: 'app-date-time-input',
  templateUrl: './date-time-input.component.html',
  styleUrls: ['./date-time-input.component.css'],
})
export class DateTimeInputComponent implements OnInit {
  dateTime: AbstractControl;
  minDateTime: string;
  maxDateTime: string;
  @Input() parentForm: FormGroup;

  constructor(private dateTimeService: DateTimeService) {}

  ngOnInit(): void {
    this.dateTime = new FormControl('', [Validators.required]);
    this.parentForm.addControl('dateTime', this.dateTime);
    this.minDateTime = '1979-01-01T00:00';
    this.maxDateTime = this.dateTimeService.getCurrentDatetime();
  }
}
