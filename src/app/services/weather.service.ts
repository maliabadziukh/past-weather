import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/3.0/onecall/timemachine';
  private apiKey = 'bd2eb3c6d299713ff453256ad2f45cf8';

  constructor(private http: HttpClient) {}

  getWeather(lon: number, lat: number, unixTime: number) {
    const params = {
      lat: lat,
      lon: lon,
      dt: unixTime,
      appid: this.apiKey,
      units: 'metric',
    };
    return this.http.get(this.apiUrl, { params });
  }
}
