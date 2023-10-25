import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectLocationData, selectLocationDataStatus, StoreDataStatus, submitQuery } from '@store';

import { WeatherAppState } from '../../../store/reducers/weather-app.reducer';

@Component({
  selector: 'app-birthday-weather-query',
  templateUrl: './birthday-weather-query.component.html',
  styleUrls: ['./birthday-weather-query.component.css'],
})
export class BirthdayWeatherQueryComponent implements OnInit {
  locationDataStatus$ = this.store.select(selectLocationDataStatus);
  locationData$ = this.store.select(selectLocationData);

  inputForm: FormGroup;
  StoreDataStatus = StoreDataStatus;

  constructor(private store: Store<WeatherAppState>) {}

  ngOnInit(): void {
    this.inputForm = new FormGroup({});
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
