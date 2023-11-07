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
export const selectCityTitle = createSelector(selectCityInput, state => state.charAt(0).toUpperCase + state.slice(1));
export const selectLongitude = createSelector(selectLocationData, state => state.data?.lon);
export const selectLatitude = createSelector(selectLocationData, state => state.data?.lat);
export const selectDateTimeInput = createSelector(selectWeatherAppFutureState, state => state.dateTimeInput);
export const selectUnixTimestamp = createSelector(selectWeatherAppFutureState, state => state.unixTimestamp);

export const selectWeatherData = createSelector(selectWeatherAppFutureState, state => state.weatherData);
export const selectWeatherDataStatus = createSelector(selectWeatherAppFutureState, state => state.weatherData.status);
export const selectWeatherDataProps = createSelector(selectWeatherData, state => state?.data?.data[0]);
