import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchCity } from 'src/app/store/actions/weather-app.actions';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css'],
})
export class CityInputComponent {
  locationInput: string;

  constructor(private store: Store) {}
  onSearch() {
    this.store.dispatch(searchCity({ query: this.locationInput }));
  }
}
