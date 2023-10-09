import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { LocationData, selectLocationUserInput } from '@store';
import { catchError, of, switchMap, withLatestFrom } from 'rxjs';
import { GeocodingService } from 'src/app/services/geocoding.service';

import { getLocation, getLocationError, getLocationNotFound, getLocationSuccess } from '../actions/weather-app.actions';

@Injectable()
export class LocationEffects {
  constructor(
    private actions$: Actions,
    private geocodingService: GeocodingService,
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
            return of(getLocationSuccess(response[0]));
          }),
          catchError(response => of(getLocationError({ error: response })))
        )
      )
    )
  );
}
