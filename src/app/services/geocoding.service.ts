import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeocodingService {
  private apiUrl = 'https://api.openweathermap.org/geo/1.0/direct';
  private apiKey = 'bd2eb3c6d299713ff453256ad2f45cf8';
  countryCodeInput: string;

  constructor(private http: HttpClient) {}

  public getLocation(city: string, countryCode: string) {
    const params = {
      q: city + ',' + countryCode,
      appid: this.apiKey,
    };
    return this.http.get(this.apiUrl, { params });
  }
}
