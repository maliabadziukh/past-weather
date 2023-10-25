import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { WeatherService } from '@services';
import {
  LocationData,
  selectDateTimeInput,
  selectLatitude,
  selectLocationUserInput,
  selectLongitude,
  selectUnixTimestamp,
} from '@store';
import { catchError, merge, of, switchMap, withLatestFrom } from 'rxjs';
import { DateConversionService } from 'src/app/services/date-conversion.service';
import { GeocodingService } from 'src/app/services/geocoding.service';

import {
  convertDateToUnix,
  fetchWeather,
  fetchWeatherError,
  fetchWeatherSuccess,
  getLocation,
  getLocationError,
  getLocationNotFound,
  getLocationSuccess,
  setUnixTimestamp,
  submitQuery,
} from '../actions/weather-app.actions';
import { WeatherData } from '../models/weather-data.model';

@Injectable()
export class WeatherAppEffects {
  constructor(
    private actions$: Actions,
    private geocodingService: GeocodingService,
    private weatherService: WeatherService,
    private dateConversionService: DateConversionService,
    private store: Store
  ) {}

  submitQuery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(submitQuery),
      switchMap(() => {
        return merge(of(getLocation()), of(convertDateToUnix()));
      })
    )
  );

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

  getUnixTimestamp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(convertDateToUnix),
      withLatestFrom(this.store.select(selectDateTimeInput)),
      switchMap(([, dateTimeInput]) => {
        const unixTimestamp = this.dateConversionService.convertToUnixTime(dateTimeInput);
        return of(setUnixTimestamp({ unixTimestamp: unixTimestamp }));
      })
    )
  );

  fetchWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchWeather),
      withLatestFrom(
        this.store.select(selectLongitude),
        this.store.select(selectLatitude),
        this.store.select(selectUnixTimestamp)
      ),
      switchMap(([, lon, lat, unixTimestamp]) =>
        this.weatherService.getWeather(lon, lat, unixTimestamp).pipe(
          switchMap((response: WeatherData) => {
            return of(fetchWeatherSuccess(response));
          }),
          catchError(response => of(fetchWeatherError({ error: response })))
        )
      )
    )
  );
}
