import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { WeatherService } from '@services';
import { StoreDataStatus } from '@store';
import { mockProvider } from '@test-helpers';
import { Observable } from 'rxjs';

import { WeatherAppEffects } from './weather-app-effects';

const initialAppState = {
  cityInput: '',
  countryCodeInput: '',
  locationData: { status: StoreDataStatus.INIT },
  weatherData: { status: StoreDataStatus.INIT },
};

describe('WeatherAppEffects', () => {
  let effects: WeatherAppEffects;
  let actions$: Observable<Action>;
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
        mockProvider(WeatherService, ['getWeather']),
      ],
    });

    effects = TestBed.inject(WeatherAppEffects);
    mockStore = TestBed.inject(MockStore);
    weatherService = TestBed.inject(WeatherService) as jasmine.SpyObj<WeatherService>;
  });
});
