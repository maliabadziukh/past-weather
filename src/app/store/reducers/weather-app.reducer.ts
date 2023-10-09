import { createReducer, on } from '@ngrx/store';
import { LocationData, StoreData, StoreDataStatus } from '@store';

import { getLocation, getLocationFailure, getLocationSuccess } from '../actions/weather-app.actions';

export const weatherAppFeatureKey = 'weather-app';

export interface WeatherAppState {
  cityInput: string;
  countryCodeInput: string;
  locationData: StoreData<LocationData, unknown>;
}

export const initialState: WeatherAppState = {
  cityInput: '',
  countryCodeInput: '',
  locationData: { status: StoreDataStatus.INIT },
};

export const weatherAppReducer = createReducer(
  initialState,
  on(getLocation, (state, { city, countryCode }) => ({
    ...state,
    cityInput: city,
    countryCodeInput: countryCode,
    locationData: { status: StoreDataStatus.PENDING },
  })),
  on(getLocationSuccess, (state, payLoad) => ({
    ...state,
    locationData: { status: StoreDataStatus.SUCCESS, data: payLoad },
  })),
  on(getLocationFailure, state => ({
    ...state,
    locationData: { status: StoreDataStatus.ERROR },
  }))
);
