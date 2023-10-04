import { createReducer, on } from '@ngrx/store';

import { searchCity } from '../actions/weather-app.actions';

export interface cityState {
  query: string;
  selected: string | undefined;
}

export const initialState: cityState = {
  query: '',
  selected: undefined,
};

export const cityReducer = createReducer(
  initialState,
  on(searchCity, (state, { query }) => ({ ...state, query: query }))
);
