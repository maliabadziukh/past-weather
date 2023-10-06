import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CityInputComponent, CountryCodeInputComponent, DateInputComponent } from '@molecules';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InputCardComponent, WeatherDisplayComponent } from '@organisms';
import { NgrxFormsModule } from 'ngrx-forms';

import { AppComponent } from './app.component';
import { weatherAppReducer } from './store/reducers/weather-app.reducer';
@NgModule({
  declarations: [
    AppComponent,
    InputCardComponent,
    WeatherDisplayComponent,
    CityInputComponent,
    DateInputComponent,
    CountryCodeInputComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ inputForm: weatherAppReducer }),
    FormsModule,
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    HttpClientModule,
    ReactiveFormsModule,
    NgrxFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
