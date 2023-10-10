export interface WeatherData {
  lat: number;
  lon: number;

  timezone: string;
  timezone_offset: number;
  current: unknown;
}
