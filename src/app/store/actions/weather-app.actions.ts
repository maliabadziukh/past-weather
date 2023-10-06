import { createAction, props } from '@ngrx/store';

export const getWeather = createAction('[Input Card] Get Weather', props<{ city: string; countryCode: string }>());
