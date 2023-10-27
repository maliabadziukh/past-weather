import { createAction, props } from '@ngrx/store';
import { LocationData } from '@store';

import { WeatherData } from '../models/weather-data.model';

export const getLocation = createAction('[Input Card] Get Location', props<{ city: string; countryCode: string }>());
export const getLocationSuccess = createAction('[Geocoding Service] Location Found', props<LocationData>());
export const getLocationError = createAction('[Geocoding Service] Error', props<{ error: unknown }>());
export const getLocationNotFound = createAction('[Geocoding Service] Location Not Found', props<{ error: string }>());
export const fetchWeather = createAction('[Get Location Effect] Fetch Weather');
export const fetchWeatherSuccess = createAction('[Weather Service] Weather Fetched', props<WeatherData>());
export const fetchWeatherError = createAction('[Weather Service] Error', props<{ error: unknown }>());
