import { createReducer, on } from '@ngrx/store';
import { LocationData, StoreData, StoreDataStatus } from '@store';

import {
  fetchWeatherError,
  fetchWeatherSuccess,
  getLocation,
  getLocationError,
  getLocationNotFound,
  getLocationSuccess,
  submitQuery,
} from '../actions/weather-app.actions';
import { WeatherData } from '../models/weather-data.model';

export const weatherAppFeatureKey = 'weather-app';

export interface WeatherAppState {
  cityInput: string;
  countryCodeInput: string;
  dateTimeInput: string;
  locationData: StoreData<LocationData, unknown>;
  weatherData: StoreData<WeatherData, unknown>;
}

export const initialState: WeatherAppState = {
  cityInput: '',
  countryCodeInput: '',
  dateTimeInput: '',
  locationData: { status: StoreDataStatus.INIT },
  weatherData: { status: StoreDataStatus.INIT },
};

export const weatherAppReducer = createReducer(
  initialState,
  on(submitQuery, (state, { city, countryCode, dateTime }) => ({
    ...state,
    cityInput: city,
    countryCodeInput: countryCode,
    dateTimeInput: dateTime,
  })),
  on(getLocation, state => ({
    ...state,
    locationData: { status: StoreDataStatus.PENDING },
  })),
  on(getLocationSuccess, (state, payLoad) => ({
    ...state,
    locationData: { status: StoreDataStatus.SUCCESS, data: payLoad },
  })),
  on(getLocationError, (state, error) => ({
    ...state,
    locationData: { status: StoreDataStatus.ERROR, error: error.error },
  })),
  on(getLocationNotFound, (state, error) => ({
    ...state,
    locationData: { status: StoreDataStatus.ERROR, error: error.error },
  })),
  on(fetchWeatherSuccess, (state, payLoad) => ({
    ...state,
    weatherData: { status: StoreDataStatus.SUCCESS, data: payLoad },
  })),
  on(fetchWeatherError, (state, error) => ({
    ...state,
    weatherData: { status: StoreDataStatus.ERROR, error: error.error },
  }))
);
