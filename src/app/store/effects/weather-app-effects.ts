import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { WeatherService } from '@services';
import { LocationData, selectLatitude, selectLocationUserInput, selectLongitude } from '@store';
import { catchError, merge, of, switchMap, withLatestFrom } from 'rxjs';
import { GeocodingService } from 'src/app/services/geocoding.service';

import {
  fetchWeather,
  fetchWeatherError,
  fetchWeatherSuccess,
  getLocation,
  getLocationError,
  getLocationNotFound,
  getLocationSuccess,
} from '../actions/weather-app.actions';
import { WeatherData } from '../models/weather-data.model';

@Injectable()
export class WeatherAppEffects {
  constructor(
    private actions$: Actions,
    private geocodingService: GeocodingService,
    private weatherService: WeatherService,
    private store: Store
  ) {}

  getLocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLocation),
      withLatestFrom(this.store.select(selectLocationUserInput)),
      switchMap(([, [city, countryCode]]) =>
        this.geocodingService.getLocation(city, countryCode).pipe(
          switchMap((response: LocationData[]) => {
            if (response.length === 0) {
              return of(getLocationNotFound({ error: 'location not found' }));
            }
            return merge(of(getLocationSuccess(response[0])), of(fetchWeather()));
          }),
          catchError(response => of(getLocationError({ error: response })))
        )
      )
    )
  );

  fetchWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchWeather),
      withLatestFrom(this.store.select(selectLongitude), this.store.select(selectLatitude)),
      switchMap(([, lon, lat]) =>
        this.weatherService.getWeather(lon, lat).pipe(
          switchMap((response: WeatherData) => {
            return of(fetchWeatherSuccess(response));
          }),
          catchError(response => of(fetchWeatherError({ error: response })))
        )
      )
    )
  );
}
