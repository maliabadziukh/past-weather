import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StoreDataStatus, submitQuery } from '@store';
import { FormFactory } from 'src/app/factories/form.factory';

import { WeatherAppState } from '../../../store/reducers/weather-app.reducer';

@Component({
  selector: 'app-birthday-weather-query',
  templateUrl: './birthday-weather-query.component.html',
  styleUrls: ['./birthday-weather-query.component.css'],
})
export class BirthdayWeatherQueryComponent implements OnInit {
  inputForm: FormGroup;
  StoreDataStatus = StoreDataStatus;

  constructor(
    private store: Store<WeatherAppState>,
    private formFactory: FormFactory
  ) {}

  ngOnInit(): void {
    this.inputForm = this.formFactory.createFormGroup();
  }

  onSubmit() {
    this.store.dispatch(
      submitQuery({
        city: this.inputForm.value.city,
        countryCode: this.inputForm.value.countryCode,
        dateTime: this.inputForm.value.dateTime,
      })
    );
  }
}
