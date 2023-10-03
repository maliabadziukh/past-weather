import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CityInputComponent } from '@molecules';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { DateInputComponent } from './components/molecules/date-input/date-input.component';
import { InputCardComponent } from './components/organisms/input-card/input-card.component';
import { WeatherDisplayComponent } from './components/organisms/weather-display/weather-display.component';
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
