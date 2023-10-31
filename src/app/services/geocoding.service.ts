import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeocodingService {
  private apiUrl = 'https://api.openweathermap.org/geo/1.0/direct';
  private apiKey = '843f3582f9614b3cd3f532fafaca1131';
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
