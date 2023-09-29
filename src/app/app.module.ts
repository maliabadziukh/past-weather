import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/core/reducers';
import { CityInputComponent } from './components/molecules/city-input/city-input.component';
import { DateInputComponent } from './components/molecules/date-input/date-input.component';
import { InputCardComponent } from './components/organisms/input-card/input-card.component';
import { WeatherDisplayComponent } from './components/organisms/weather-display/weather-display.component';

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
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
