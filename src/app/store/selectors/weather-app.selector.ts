import { createFeatureSelector, createSelector } from '@ngrx/store';

import { weatherAppFeatureKey, WeatherAppState } from '../reducers/weather-app.reducer';

const selectWeatherAppFutureState = createFeatureSelector<WeatherAppState>(weatherAppFeatureKey);

export const getCityInput = createSelector(selectWeatherAppFutureState, state => state.cityInput);
export const getLocationData = createSelector(selectWeatherAppFutureState, state => state.locationData);
export const getLocationDataStatus = createSelector(getLocationData, state => state.status);
