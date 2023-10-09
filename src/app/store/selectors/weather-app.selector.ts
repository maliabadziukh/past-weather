import { createSelector } from '@ngrx/store';

import { appState } from '../reducers/weather-app.reducer';

export const selectAppFeature = (state: appState) => state;

export const getCityInput = createSelector(selectAppFeature, state => state.cityInput);
