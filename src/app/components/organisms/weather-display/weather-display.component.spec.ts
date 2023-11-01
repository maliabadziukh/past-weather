import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreDataStatus } from '@store';
import { of } from 'rxjs';
import { WeatherDataProps } from 'src/app/store/models/weather-data.model';

import { WeatherDisplayComponent } from './weather-display.component';

const initialAppState = {
  cityInput: '',
  countryCodeInput: '',
  locationData: { status: StoreDataStatus.INIT },
  weatherData: { status: StoreDataStatus.INIT },
};

const mockWeatherData: WeatherDataProps = {
  dt: 1645888976,
  temp: 279.13,
  feels_like: 276.44,
  pressure: 1029,
  humidity: 64,
  dew_point: 272.88,
  uvi: 0.06,
  clouds: 0,
  visibility: 10000,
  wind_speed: 3.6,
  wind_deg: 340,
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
};
describe('WeatherDisplayComponent', () => {
  let fixture: ComponentFixture<WeatherDisplayComponent>;
  let component: WeatherDisplayComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherDisplayComponent],
      providers: [provideMockStore({ initialState: initialAppState })],
    });
    fixture = TestBed.createComponent(WeatherDisplayComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should not render component if weatherData is not available', () => {
    component.weatherData$ = undefined;

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('div'))).toBeFalsy();
  });

  it('should render compoenet if weatherData is available', () => {
    component.weatherData$ = of(mockWeatherData);

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('div'))).toBeTruthy();
  });

  it('should display provided weatherData in the template', () => {
    component.weatherData$ = of(mockWeatherData);
    fixture.detectChanges();

    const innerHTML = fixture.debugElement.nativeElement.innerHTML;

    expect(innerHTML).toContain(`${mockWeatherData.temp}`);
    expect(innerHTML).toContain(`${mockWeatherData.humidity}`);
    expect(innerHTML).toContain(`${mockWeatherData.wind_speed}`);
    expect(fixture.debugElement.query(By.css(`img[src*="${mockWeatherData.weather[0].icon}.png"]`))).toBeTruthy();
  });
});
