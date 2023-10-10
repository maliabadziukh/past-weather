import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CityInputComponent, CountryCodeInputComponent, DateInputComponent } from '@molecules';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LocationInputCardComponent, WeatherDisplayComponent } from '@organisms';

import { AppComponent } from './app.component';
import { LocationEffects } from './store/effects/get-location.effect';
import { weatherAppFeatureKey, weatherAppReducer } from './store/reducers/weather-app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    LocationInputCardComponent,
    WeatherDisplayComponent,
    CityInputComponent,
    DateInputComponent,
    CountryCodeInputComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ [weatherAppFeatureKey]: weatherAppReducer }),
    FormsModule,
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([LocationEffects]),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
