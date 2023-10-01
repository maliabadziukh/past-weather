import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/core/reducers';
import { CityInputComponent } from './components/molecules/city-input/city-input.component';
import { DateInputComponent } from './components/molecules/date-input/date-input.component';
import { InputCardComponent } from './components/organisms/input-card/input-card.component';
import { WeatherDisplayComponent } from './components/organisms/weather-display/weather-display.component';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { cityReducer } from './core/reducers/city.reducer';
@NgModule({
  declarations: [
    AppComponent,
    InputCardComponent,
    WeatherDisplayComponent,
    CityInputComponent,
    DateInputComponent,
  ],
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
