import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { WeatherService } from '@services';
import { catchError, of } from 'rxjs';
import { switchMap } from 'rxjs-compat/operator/switchMap';
import { withLatestFrom } from 'rxjs-compat/operator/withLatestFrom';

import { fetchWeather, fetchWeatherError, fetchWeatherSuccess } from '../actions/weather-app.actions';
import { WeatherData } from '../models/weather-data.model';
import { selectLatitude, selectLongitude } from '../selectors';

@Injectable()
export class WeatherEffects {
  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
    private store: Store
  ) {}

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
