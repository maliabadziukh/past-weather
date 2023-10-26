import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { StoreDataStatus } from './store/models';
import { WeatherAppState } from './store/reducers/weather-app.reducer';
import { selectCityTitle, selectLocationDataStatus } from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'past-weather';
  locationDataStatus$ = this.store.select(selectLocationDataStatus);
  birthCity$ = this.store.select(selectCityTitle);

  StoreDataStatus = StoreDataStatus;

  constructor(private store: Store<WeatherAppState>) {}
}
