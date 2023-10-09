import { createReducer, on } from '@ngrx/store';

import { getLocation, getLocationSuccess } from '../actions/weather-app.actions';

export interface appState {
  cityInput: string;
  countryCodeInput: string;
  locationData: any;
}

export const initialState: appState = {
  cityInput: '',
  countryCodeInput: '',
  locationData: {},
};
export const weatherAppReducer = createReducer(
  initialState,
  on(getLocation, (state, { city, countryCode }) => ({ ...state, cityInput: city, countryCodeInput: countryCode })),
  on(getLocationSuccess, (state, { locationData }) => ({ ...state, locationData: locationData }))
);
