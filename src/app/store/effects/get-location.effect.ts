import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { GeocodingService } from 'src/app/services/geocoding.service';

import { getLocation, getLocationFailure, getLocationSuccess } from '../actions/weather-app.actions';

@Injectable()
export class LocationEffects {
  constructor(
    private actions$: Actions,
    private geocodingService: GeocodingService
  ) {}

  getLocation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getLocation),
      mergeMap(action =>
        this.geocodingService.getLocation(action.city, action.countryCode).pipe(
          map(locationData => getLocationSuccess(locationData)),
          catchError(() => of(getLocationFailure()))
        )
      )
    )
  );
}
