import { createReducer, on, select } from '@ngrx/store';
import { searchCity, selectCity } from '../actions/city.actions';
import { state } from '@angular/animations';

export interface cityState {
  query: string;
  selected: string | null;
}

export const initialState: cityState = {
  query: '',
  selected: null,
};

export const cityReducer = createReducer(
  initialState,
  on(searchCity, (state, { query }) => ({ ...state, query: query }))
);
