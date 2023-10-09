import { createAction, props } from '@ngrx/store';

export const getLocation = createAction('[Input Card] Get Location', props<{ city: string; countryCode: string }>());
export const getLocationSuccess = createAction('[Geocoding Service] Location Found', props<any>());
export const getLocationFailure = createAction('[Geocoding Service] Location Not Found');
