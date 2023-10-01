import { createAction, props } from '@ngrx/store';

export const searchCity = createAction(
  '[City Input] Search City',
  props<{ query: string }>()
);
export const selectCity = createAction(
  '[City Input] Select City',
  props<{ place: string }>()
);
