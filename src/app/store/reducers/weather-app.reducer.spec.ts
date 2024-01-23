import { TypedAction } from '@ngrx/store/src/models';

import {
  fetchWeatherError,
  fetchWeatherSuccess,
  getLocation,
  getLocationError,
  getLocationNotFound,
  getLocationSuccess,
  setUnixTimestamp,
  submitQuery,
} from '../actions/weather-app.actions';
import { StoreDataStatus } from '../models';
import { WeatherData } from '../models/weather-data.model';
import { initialState, weatherAppReducer, WeatherAppState } from './weather-app.reducer';

describe('WeatherAppReducer', () => {
  it('correctly updates state on submitQuery action', () => {
    const testCity = 'test';
    const testCountryCode = 'tst';
    const testDateTime = '123';
    const action = submitQuery({ city: testCity, countryCode: testCountryCode, dateTime: testDateTime });
    const expectedState: WeatherAppState = {
      ...initialState,
      cityInput: testCity,
      countryCodeInput: testCountryCode,
      dateTimeInput: testDateTime,
    };

    const result = weatherAppReducer(initialState, action);

    expect(result).toEqual(expectedState);
  });

  it('correctly updates state on getLocation action', () => {
    const action = getLocation();
    const expectedState: WeatherAppState = {
      ...initialState,
      locationData: { status: StoreDataStatus.PENDING },
    };

    const result = weatherAppReducer(initialState, action);

    expect(result).toEqual(expectedState);
  });

  it('correctly updates state on getLocationSuccess action', () => {
    const mockLocationData = {
      name: 'testName',
      lat: 123,
      lon: 456,
      country: 'testCountry',
      type: '[Geocoding Service] Location Found',
    };
    const action = getLocationSuccess(mockLocationData);
    const expectedState: WeatherAppState = {
      ...initialState,
      locationData: { status: StoreDataStatus.SUCCESS, data: mockLocationData },
    };

    const result = weatherAppReducer(initialState, action);

    expect(result).toEqual(expectedState);
  });

  it('correctly updates state on getLocationError action', () => {
    const mockError = { error: 'testError' };
    const action = getLocationError(mockError);
    const expectedState: WeatherAppState = {
      ...initialState,
      locationData: { status: StoreDataStatus.ERROR, error: mockError.error },
    };

    const result = weatherAppReducer(initialState, action);

    expect(result).toEqual(expectedState);
  });

  it('correctly updates state on getLocationNotFound action', () => {
    const mockError = { error: 'testError' };
    const action = getLocationNotFound(mockError);
    const expectedState: WeatherAppState = {
      ...initialState,
      locationData: { status: StoreDataStatus.ERROR, error: mockError.error },
    };

    const result = weatherAppReducer(initialState, action);

    expect(result).toEqual(expectedState);
  });

  it('correctly updates state on setUnixTimestamp action', () => {
    const mockTimestamp = { unixTimestamp: 123 };
    const action = setUnixTimestamp(mockTimestamp);
    const expectedState: WeatherAppState = {
      ...initialState,
      unixTimestamp: mockTimestamp.unixTimestamp,
    };

    const result = weatherAppReducer(initialState, action);

    expect(result).toEqual(expectedState);
  });

  it('correctly updates state on fetchWeatherSuccess action', () => {
    const mockWeatherData: WeatherData & TypedAction<'[Weather Service] Weather Fetched'> = {
      lat: 40.7128,
      lon: -74.006,
      timezone: 'America/New_York',
      timezone_offset: -14400,
      data: [
        {
          dt: 1635745200,
          temp: 22.5,
          feels_like: 21.2,
          pressure: 1016,
          humidity: 70,
          dew_point: 16.8,
          clouds: 40,
          uvi: 4.5,
          visibility: 10000,
          wind_speed: 3.5,
          wind_deg: 210,
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'scattered clouds',
              icon: '03d',
            },
          ],
        },
      ],
      type: '[Weather Service] Weather Fetched',
    };
    const action = fetchWeatherSuccess(mockWeatherData);
    const expectedState: WeatherAppState = {
      ...initialState,
      weatherData: { status: StoreDataStatus.SUCCESS, data: mockWeatherData },
    };

    const result = weatherAppReducer(initialState, action);

    expect(result).toEqual(expectedState);
  });

  it('correctly updates state on fetchWeatherError action', () => {
    const mockError = { error: 'testError' };
    const action = fetchWeatherError(mockError);
    const expectedState: WeatherAppState = {
      ...initialState,
      weatherData: { status: StoreDataStatus.ERROR, error: mockError.error },
    };

    const result = weatherAppReducer(initialState, action);

    expect(result).toEqual(expectedState);
  });
});
