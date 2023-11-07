import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectLocationData,
  selectLocationDataStatus,
  selectWeatherData,
  selectWeatherDataProps,
  selectWeatherDataStatus,
  StoreDataStatus,
} from '@store';
import { combineLatest } from 'rxjs';
import { WeatherAppState } from 'src/app/store/reducers/weather-app.reducer';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css'],
})
export class WeatherDisplayComponent {
  StoreDataStatus = StoreDataStatus;

  weatherDataProps$ = this.store.select(selectWeatherDataProps);
  weatherData$ = this.store.select(selectWeatherData);
  locationData$ = this.store.select(selectLocationData);
  dataStatus$ = combineLatest([
    this.store.select(selectLocationDataStatus),
    this.store.select(selectWeatherDataStatus),
  ]);

  constructor(private store: Store<WeatherAppState>) {}
}
