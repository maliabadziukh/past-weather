import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { StoreDataStatus, submitQuery } from '@store';
import { MockComponent } from 'ng-mocks';
import { FormFactory } from 'src/app/factories/form.factory';

import { CityInputComponent } from '../../molecules/city-input/city-input.component';
import { CountryCodeInputComponent } from '../../molecules/country-code-input/country-code-input.component';
import { DateTimeInputComponent } from '../../molecules/date-time-input/date-time-input.component';
import { BirthdayWeatherQueryComponent } from './birthday-weather-query.component';

const initialAppState = {
  cityInput: '',
  countryCodeInput: '',
  locationData: { status: StoreDataStatus.INIT },
  weatherData: { status: StoreDataStatus.INIT },
};

const mockInputForm = new FormGroup({
  city: new FormControl('city', []),
  countryCode: new FormControl('countryCode', []),
  dateTime: new FormControl('dateTime', []),
});

describe('BirthdayWeatherQueryComponent', () => {
  let component: BirthdayWeatherQueryComponent;
  let fixture: ComponentFixture<BirthdayWeatherQueryComponent>;
  let store: MockStore;
  let formFactory: FormFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        BirthdayWeatherQueryComponent,
        MockComponent(CityInputComponent),
        MockComponent(CountryCodeInputComponent),
        MockComponent(DateTimeInputComponent),
      ],
      providers: [provideMockStore({ initialState: initialAppState }), FormFactory],
    });
    fixture = TestBed.createComponent(BirthdayWeatherQueryComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    formFactory = TestBed.inject(FormFactory);
    spyOn(formFactory, 'createFormGroup').and.returnValue(mockInputForm);
    fixture.detectChanges();
  });

  it('should dispatch submitQuery action with provided form values onSubmit', () => {
    const testValues = {
      city: 'Test',
      countryCode: 'TS',
      dateTime: '2023-01-01',
    };

    component.inputForm.patchValue(testValues);
    const dispatchSpy = spyOn(store, 'dispatch');
    component.onSubmit();

    expect(dispatchSpy).toHaveBeenCalledWith(submitQuery(testValues));
  });
});
