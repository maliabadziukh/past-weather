import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectWeatherDataProps, selectWeatherDataStatus, StoreDataStatus } from '@store';
import { WeatherAppState } from 'src/app/store/reducers/weather-app.reducer';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css'],
})
export class WeatherDisplayComponent {
  StoreDataStatus = StoreDataStatus;
  weatherDataStatus$ = this.store.select(selectWeatherDataStatus);
  weatherData$ = this.store.select(selectWeatherDataProps);

  constructor(private store: Store<WeatherAppState>) {}
}
