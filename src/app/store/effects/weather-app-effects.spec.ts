import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { GeocodingService, WeatherService } from '@services';
import { fetchWeather, getLocation, getLocationSuccess, selectLocationUserInput, StoreDataStatus } from '@store';
import { mockProvider } from '@test-helpers';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

import { WeatherAppEffects } from './weather-app-effects';

const initialAppState = {
  cityInput: '',
  countryCodeInput: '',
  locationData: { status: StoreDataStatus.INIT },
  weatherData: { status: StoreDataStatus.INIT },
};

fdescribe('WeatherAppEffects', () => {
  let effects: WeatherAppEffects;
  let actions$: Observable<Action>;
  let geocodingService: jasmine.SpyObj<GeocodingService>;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let weatherService: jasmine.SpyObj<WeatherService>;
  let mockStore: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        WeatherAppEffects,
        provideMockStore({ initialState: initialAppState }),
        provideMockActions(() => actions$),
        mockProvider(GeocodingService, ['getLocation']),
        mockProvider(WeatherService, ['getWeather']),
      ],
    });

    effects = TestBed.inject(WeatherAppEffects);
    mockStore = TestBed.inject(MockStore);
    geocodingService = TestBed.inject(GeocodingService) as jasmine.SpyObj<GeocodingService>;
    weatherService = TestBed.inject(WeatherService) as jasmine.SpyObj<WeatherService>;
  });

  describe('getLocation$', () => {
    it('should dispatch the getLocationSuccess and fetchWeather actions when the geocodingService returns a location (classic)', () => {
      const geocodingServiceMockResponse = [
        {
          name: 'Amsterdam',
          local_names: {
            nl: 'Amsterdam',
          },
          lat: 52.3727598,
          lon: 4.8936041,
          country: 'NL',
          state: 'North Holland',
        },
      ];

      geocodingService.getLocation.and.returnValue(of(geocodingServiceMockResponse));

      mockStore.overrideSelector(selectLocationUserInput, ['Amsterdam', 'NL']);

      const actions: Action[] = [];
      actions$ = of(getLocation({ city: 'Amsterdam', countryCode: 'NL' }));

      effects.getLocation$.subscribe(action => actions.push(action));
      expect(actions).toEqual([getLocationSuccess(geocodingServiceMockResponse[0]), fetchWeather()]);
      expect(geocodingService.getLocation).toHaveBeenCalled();
    });

    it('should dispatch the getLocationSuccess and fetchWeather actions when the geocodingService returns a location (marble)', () => {
      const geocodingServiceMockResponse = [
        {
          name: 'Amsterdam',
          local_names: {
            nl: 'Amsterdam',
          },
          lat: 52.3727598,
          lon: 4.8936041,
          country: 'NL',
          state: 'North Holland',
        },
      ];

      mockStore.overrideSelector(selectLocationUserInput, ['Amsterdam', 'NL']);

      actions$ = hot('-a-', { a: getLocation({ city: 'Amsterdam', countryCode: 'NL' }) });
      const response = cold('-a|', { a: geocodingServiceMockResponse });
      const expected = cold('--(bc)', { b: getLocationSuccess(geocodingServiceMockResponse[0]), c: fetchWeather() }); // '()' indicates multiple actions emitted at the same time

      geocodingService.getLocation.and.returnValue(response);

      expect(effects.getLocation$).toBeObservable(expected);
    });
  });
});
