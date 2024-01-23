import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { BirthdayWeatherQueryComponent } from './components/organisms/birthday-weather-query/birthday-weather-query.component';
import { WeatherDisplayComponent } from './components/organisms/weather-display/weather-display.component';
import { StoreDataStatus } from './store/models';

const initialAppState = {
  cityInput: '',
  countryCodeInput: '',
  locationData: { status: StoreDataStatus.INIT },
  weatherData: { status: StoreDataStatus.INIT },
};
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockComponent(WeatherDisplayComponent),
        MockComponent(BirthdayWeatherQueryComponent),
      ],
      providers: [provideMockStore({ initialState: initialAppState })],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the weather query but not weather display when status is INIT', () => {
    const mockDataStatus = StoreDataStatus.INIT;
    component.locationDataStatus$ = of(mockDataStatus);

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('app-birthday-weather-query'))).toBeTruthy();
    expect(fixture.debugElement.query(By.css('app-weather-display'))).toBeFalsy();
  });

  it('should display the weather display but not weather query when status is not INIT', () => {
    const mockDataStatus = StoreDataStatus.PENDING;
    component.locationDataStatus$ = of(mockDataStatus);

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('app-birthday-weather-query'))).toBeFalsy();
    expect(fixture.debugElement.query(By.css('app-weather-display'))).toBeTruthy();
  });
});
