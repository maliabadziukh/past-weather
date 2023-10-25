import { createFeatureSelector, createSelector } from '@ngrx/store';

import { weatherAppFeatureKey, WeatherAppState } from '../reducers/weather-app.reducer';

const selectWeatherAppFutureState = createFeatureSelector<WeatherAppState>(weatherAppFeatureKey);

export const selectLocationData = createSelector(selectWeatherAppFutureState, state => state.locationData);
export const selectLocationDataStatus = createSelector(selectLocationData, state => state.status);
export const selectCityInput = createSelector(selectWeatherAppFutureState, state =>
  state.cityInput.toLocaleLowerCase()
);
export const selectCountryCodeInput = createSelector(selectWeatherAppFutureState, state =>
  state.countryCodeInput.toUpperCase()
);
export const selectLocationUserInput = createSelector(
  selectCityInput,
  selectCountryCodeInput,
  (cityInput, countryCodeInput) => [cityInput, countryCodeInput]
);
export const selectLongitude = createSelector(selectLocationData, state => state.data?.lon);
export const selectLatitude = createSelector(selectLocationData, state => state.data?.lat);
export const selectDateTime = createSelector(selectWeatherAppFutureState, state => state.dateTimeInput);
