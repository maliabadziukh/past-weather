import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getLocation, getLocationData, getLocationDataStatus, StoreDataStatus } from '@store';
import { GeocodingService } from 'src/app/services/geocoding.service';
import { WeatherAppState } from 'src/app/store/reducers/weather-app.reducer';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.css'],
})
export class InputCardComponent implements OnInit {
  locationDataStatus$ = this.store.select(getLocationDataStatus);
  locationData$ = this.store.select(getLocationData);

  inputForm: FormGroup;
  StoreDataStatus = StoreDataStatus;

  constructor(
    private store: Store<WeatherAppState>,
    private gcservice: GeocodingService
  ) {}

  ngOnInit(): void {
    this.inputForm = new FormGroup({});
    this.gcservice.getLocation('Kyiv', 'UA').subscribe(response => console.log(response));
  }

  onSubmit() {
    this.store.dispatch(
      getLocation({ city: this.inputForm.value.city, countryCode: this.inputForm.value.countryCode })
    );
  }
}
