import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { WeatherService } from '@services';
import { getLocation, selectLocationData, selectLocationDataStatus, StoreDataStatus } from '@store';

import { WeatherAppState } from '../../../store/reducers/weather-app.reducer';

@Component({
  selector: 'app-location-input-card',
  templateUrl: './location-input-card.component.html',
  styleUrls: ['./location-input-card.component.css'],
})
export class LocationInputCardComponent implements OnInit {
  locationDataStatus$ = this.store.select(selectLocationDataStatus);
  locationData$ = this.store.select(selectLocationData);

  inputForm: FormGroup;
  StoreDataStatus = StoreDataStatus;

  constructor(
    private store: Store<WeatherAppState>,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.inputForm = new FormGroup({});
  }

  onSubmit() {
    this.store.dispatch(
      getLocation({ city: this.inputForm.value.city, countryCode: this.inputForm.value.countryCode })
    );
  }
}
