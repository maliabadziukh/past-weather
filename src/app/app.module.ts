import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CityInputComponent, DateInputComponent } from '@molecules';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InputCardComponent, WeatherDisplayComponent } from '@organisms';

import { AppComponent } from './app.component';
import { cityReducer } from './store/reducers/weather-app.reducer';
@NgModule({
  declarations: [AppComponent, InputCardComponent, WeatherDisplayComponent, CityInputComponent, DateInputComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ city: cityReducer }),
    FormsModule,
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
