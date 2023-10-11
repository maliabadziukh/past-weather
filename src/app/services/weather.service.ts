import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/3.0/onecall';
  private apiKey = '843f3582f9614b3cd3f532fafaca1131';

  private constructor(private http: HttpClient) {}

  getWeather(lon: number, lat: number) {
    const params = {
      lat: lat,
      lon: lon,
      apid: this.apiKey,
      exclude: 'minutely, hourly, daily, alerts',
    };
    return this.http.get(this.apiUrl, { params });
  }
}
