import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CityInputComponent, CountryCodeInputComponent, DateTimeInputComponent } from '@molecules';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BirthdayWeatherQueryComponent, WeatherDisplayComponent } from '@organisms';

import { AppComponent } from './app.component';
import { WeatherAppEffects } from './store/effects/weather-app-effects';
import { weatherAppFeatureKey, weatherAppReducer } from './store/reducers/weather-app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BirthdayWeatherQueryComponent,
    WeatherDisplayComponent,
    CityInputComponent,
    DateTimeInputComponent,
    CountryCodeInputComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ [weatherAppFeatureKey]: weatherAppReducer }),
    FormsModule,
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([WeatherAppEffects]),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
